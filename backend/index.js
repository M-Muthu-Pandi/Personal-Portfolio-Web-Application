import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";

// Import Routes
import contactFormRoutes from "./routes/contactFormRoutes/contactFormRoutes.js";
import skillsRoutes from "./routes/skillsRoutes/skillsRoutes.js";
import projectRoutes from "./routes/projectRoutes/projectRoutes.js";
import socialMediaRoutes from "./routes/socialMediaLinksRoutes/socialMediaRoutes.js";

const app = express();
app.use(cors());

// Middleware
app.use(json());

// MongoDB Connection
connect(
  "mongodb+srv://muthupandim5799:RABjQcCdjnK2oCV3@muthu-portfolio.kvkuw.mongodb.net/muthuportfolio?retryWrites=true&w=majority&appName=Muthu-portfolio"
)
  .then(() => console.log("DB Success"))
  .catch(() => console.log("DB failed"));

// Use the routes
app.use("/api/contactform", contactFormRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/socialmedia", socialMediaRoutes);

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server started at port ${port}...`);
});
