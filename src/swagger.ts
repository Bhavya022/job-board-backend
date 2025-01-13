import swaggerJsDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Job Board API",
    version: "1.0.0",
    description: "API documentation for the Job Board application",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"], 
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default swaggerSpec;
