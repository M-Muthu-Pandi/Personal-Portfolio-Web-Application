import express from "express";
import { SocialMedias } from "../../models/socialMediaModels.js";

const router = express.Router();

// Get all social media links
router.get("/", async (req, res) => {
  try {
    const socialMedias = await SocialMedias.find({});
    res.send(socialMedias);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new social media link
router.post("/", async (req, res) => {
  try {
    const { image, link, title } = req.body;

    const newSocialMedias = new SocialMedias({
      image,
      link,
      title,
    });

    await newSocialMedias.save();
    res
      .status(201)
      .json({ message: "Form added successfully", details: newSocialMedias });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
