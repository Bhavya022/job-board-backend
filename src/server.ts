console.log("Starting the server...");

import express from "express";
import bodyParser from "body-parser";
import jobRoutes from "./routes/job.routes";
import sequelize from "./config/database";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", jobRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
