const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition:{
    openapi: "3.0.0",
    info: {
      title: "Restaurant Management System Administrator API Documentation",
      version: "1.0.0",
      description: "This is the restaurant management system administrator's authentication and authorization API",
      contact: {
        name: "Paul Sanga",
        email: "paulvasgit99@gmail.com"
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT"
      }
    },
    host: "127.0.0.1:5000",
    basePath: "/api/admin",
    tags: [
      {
        name: "Administrator",
        description: "This is the documentation for the administrator's authentication and authorization API of the restaurant management system"
      }
    ],
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    servers: [
      {
        url: "http://127.0.0.1:5000"
      }
    ]
  },
  apis: ["../routes/routes.js"]
}

const specs = swaggerJsDoc(options);
module.exports = specs;
