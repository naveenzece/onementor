const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Onementor API',
      version: '1.0.0',
      description: 'A simple API for managing users and OTP authentication',
    },
    servers: [
      {
        url: 'http://localhost:8001',
      },
    ],
  },
  apis: ['./controller/*.js', './routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
