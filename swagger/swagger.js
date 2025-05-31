const dotenv = require('dotenv');
dotenv.config();

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
        url: `http://localhost:${process.env.PORT || 3000}`, // Use the PORT from .env or default to 3000
      },
    ],
  },
  apis: ['./swagger/swaggerEndpoints.js'], // Path to the API docs
};

module.exports=swaggerOptions;