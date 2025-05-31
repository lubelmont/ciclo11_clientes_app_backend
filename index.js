const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { version } = require('./package.json'); 
const { Sequelize } = require('sequelize');
const clientController = require('./controllers/clientController.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port =process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Application is running',
    version, 
    timestamp: new Date().toISOString(), 
  });
});


const swaggerOptions = require('./swagger/swagger.js');
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.post('/api/intro', (req, res) => {
    const { name } = req.body;
    res.json({
        message: `Hello ${name}, welcome to the API!`
    });
});


const clientRoutes = require('./routes/clientRoutes');
app.use('/api/v1', clientRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});