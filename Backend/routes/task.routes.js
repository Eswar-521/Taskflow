import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/task.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);


router.post("/:id/tasks", createTask);
router.get("/:id/tasks", getTasks);

router.patch("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;