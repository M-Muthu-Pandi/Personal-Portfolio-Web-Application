import express from "express";
import { ContactForm } from "../../models/contactFormModel.js";

const router = express.Router();

// Get all contact forms
router.get("/", async (req, res) => {
  try {
    const contactForm = await ContactForm.find({});
    res.send(contactForm);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new contact form
router.post("/", async (req, res) => {
  try {
    const { userName, email, number, message } = req.body;

    const newContactForm = new ContactForm({
      userName,
      email,
      number,
      message,
    });

    await newContactForm.save();
    res
      .status(201)
      .json({ message: "Form added successfully", details: newContactForm });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
