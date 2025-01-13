import { Request, Response } from "express";
import Job from "../models/job.models"; 
export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, company, location, salary, description } = req.body;

    if (!title || !company || !location || !salary || !description) {
      res.status(400).json({ message: "All fields are required." }); 
      return;
    }

    const job = await Job.create({ title, company, location, salary, description });
    res.status(201).json(job);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
};
export const getJobs = async (_req: Request, res: Response): Promise<void> => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
};
export const getJobById = async (req: Request, res: Response): Promise<void>=> {  //explicit return type
  try {
    const { id } = req.params;
    const job = await Job.findByPk(id);

    if (!job) {
     res.status(404).json({ message: "Job not found." });
     return
    }

    res.status(200).json(job);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
};
export const updateJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, company, location, salary, description } = req.body;

    const job = await Job.findByPk(id);
    if (!job) {
       res.status(404).json({ message: "Job not found." });
       return 
    }

    await job.update({ title, company, location, salary, description });
    res.status(200).json(job);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
};
export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const job = await Job.findByPk(id);
    if (!job) {
       res.status(404).json({ message: "Job not found." }); 
       return;
    }

    await job.destroy();
    res.status(200).json({ message: "Job deleted successfully." });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
};
