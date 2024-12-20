import { Schema, model } from "mongoose";

// Schema for storing Contact Form details
const contactFormSchema = new Schema({
  userName: String,
  email: String,
  number: Number,
  message: String,
});

// Model for the Contact Form collection
export const ContactForm = model(
  "ContactForm",
  contactFormSchema,
  "contactform"
);
