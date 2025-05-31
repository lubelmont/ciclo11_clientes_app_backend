const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { Sequelize } = require('sequelize');
//const Cliente = require('./models/Client.js'); 


//Database connection
const sequelize = new Sequelize('ciclo_once','root','1qaz2wsx',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

//Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
//Test the connection

const Cliente = sequelize.define('Cliente', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    correo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fecha_nacimiento: {
      type: Sequelize.DATE,
      allowNull: false
    },
  },
  {
    timestamps: false, // Disable createdAt and updatedAt fields
    tableName: 'clientes' // Specify the table name if it differs from the model name
  }

);


const app = express();
const port = 3000;

app.use(express.json());



//Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation using Swagger',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./index.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));





app.get('/', (req, res) => {
  res.send('Hello World!');
}
);


/**
 * @swagger
 * /api/intro:
 *   post:
 *     summary: Greets the user with a welcome message.
 *     description: This endpoint receives a user's name in the request body and returns a personalized welcome message.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *                 example: John
 *     responses:
 *       200:
 *         description: A personalized welcome message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The welcome message.
 *                   example: Hello John, welcome to the API!
 */
app.post('/api/intro', (req, res) => {
    const { name } = req.body;
    res.json({
        message: `Hello ${name}, welcome to the API!`
    });
});





/**
 * @swagger
 * /api/v1/listAllclients:
 *   get:
 *     summary: Retrieve a list of all clients.
 *     description: This endpoint fetches all clients from the database.
 *     responses:
 *       200:
 *         description: A list of clients.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the client.
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     description: The first name of the client.
 *                     example: Juan
 *                   apellido:
 *                     type: string
 *                     description: The last name of the client.
 *                     example: Pérez
 *                   fecha_nacimiento:
 *                     type: string
 *                     format: date
 *                     description: The birth date of the client.
 *                     example: 1990-05-15
 *                   correo:
 *                     type: string
 *                     description: The email of the client.
 *                     example: juan.perez@example.com
 *                   is_deleted:
 *                     type: integer
 *                     description: Logical deletion status (0 = active, 1 = deleted).
 *                     example: 0
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Internal Server Error
 */
app.get('/api/v1/listAllclients', async (req, res) => {
  
  try {
    const clients = await Cliente.findAll();
    console.log( clients);
    res.json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





//Inicalize the app
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});