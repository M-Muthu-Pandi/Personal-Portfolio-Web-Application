import { Schema, model } from "mongoose";

// Schema for storing Projects details
const skillSchema = new Schema({
  image: String,
  title: String,
  desc: String,
  skiilsUsed: String,
  liveDemo: String,
  gitHub: String,
});

// Model for the Projects collection
export const Projects = model("Projects", skillSchema, "projects");
