import { Schema, model } from "mongoose";

// Schema for storing Skills details
const skillSchema = new Schema({
  image: String,
  title: String,
});

// Model for the Skills collection
export const Skills = model("Skills", skillSchema, "skills");
