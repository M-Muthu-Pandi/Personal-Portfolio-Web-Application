import express from "express";
import { Projects } from "../../models/projectModels.js";

const router = express.Router();

// Get all Projects
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find({});
    res.send(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new Project
router.post("/", async (req, res) => {
  try {
    const { image, title, desc, skiilsUsed, liveDemo, gitHub } = req.body;

    const newProjects = new Projects({
      image,
      title,
      desc,
      skiilsUsed,
      liveDemo,
      gitHub,
    });

    await newProjects.save();
    res
      .status(201)
      .json({ message: "Project added successfully", details: newProjects });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
