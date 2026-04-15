import express from "express";
import cors from "cors";
import dotEnv from "dotenv";

import pool from "./config/db.js";
import createTables from "./database/schema.js";

import authRoutes from "./routes/auth.routes.js";

import projectRoutes from "./routes/project.routes.js";

import taskRoutes from "./routes/task.routes.js";

import dashboardRoutes from "./routes/dashboard.routes.js";

import memberRoutes from "./routes/member.routes.js";

import commentRoutes from "./routes/comment.routes.js";

import activityRoutes from "./routes/activity.routes.js";

app.use("/activity", activityRoutes);


app.use("/comments", commentRoutes);

app.use("/members", memberRoutes);

dotEnv.config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);

app.use("/projects", projectRoutes);

app.use("/projects", taskRoutes);

app.use("/dashboard", dashboardRoutes);


// test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// DB connect
pool.connect()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// create tables
createTables();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
