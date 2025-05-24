const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { Sequelize } = require('sequelize');


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




//Inicalize the app
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});