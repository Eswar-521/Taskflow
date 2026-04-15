import express from "express";
import {
  createComment,
  getComments,
  deleteComment
} from "../controllers/comment.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/:taskId", createComment);
router.get("/:taskId", getComments);
router.delete("/:id", deleteComment);

export default router;