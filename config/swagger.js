const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Digital API documentation",
        version: "1.0.0",
        description:
          "This is a demo application.",
        contact: {
          name: "Max Diamond",
          url: "https://dmdboi.me"
        },
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          }
        }
      },
      security: [{
        bearerAuth: []
      }]
    },
    apis: [
        "./routes/index.js",
        "./routes/users.js",
        "./routes/api.js",
      ],
  };

module.exports = options