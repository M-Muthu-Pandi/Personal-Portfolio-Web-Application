import { Schema, model } from "mongoose";

// Schema for storing SocialMedias details
const socialMediaSchema = new Schema({
  image: String,
  link: String,
  title: String,
});

// Model for the SocialMedias collection
export const SocialMedias = model(
  "SocialMedias",
  socialMediaSchema,
  "socialmedialinks"
);
