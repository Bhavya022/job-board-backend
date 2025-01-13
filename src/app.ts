import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import jobRoutes from "./routes/job.routes"; 
import sequelize from "./config/database"; 

const app: Application = express();
app.use(bodyParser.json());
sequelize.authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.error("Database connection failed:", err));
app.use("/api", jobRoutes); 
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Job Board API!");
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "An unexpected error occurred" });
});

export default app;
