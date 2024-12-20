import express from "express";
import { Skills } from "../../models/skillModels.js";

const router = express.Router();

// Get all social media links
router.get("/", async (req, res) => {
  try {
    const skills = await Skills.find({});
    res.send(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new social media link
router.post("/", async (req, res) => {
  try {
    const { image, title } = req.body;

    const newSkills = new Skills({
      image,
      title,
    });

    await newSkills.save();
    res
      .status(201)
      .json({ message: "Form added successfully", details: newSkills });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
