import { Request, Response, Router } from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/job.controller";
const router = Router();
router.post("/jobs", createJob);       
router.get("/jobs", getJobs);          
router.get("/jobs/:id", getJobById);   
router.put("/jobs/:id", updateJob);   
router.delete("/jobs/:id", deleteJob);

export default router;
