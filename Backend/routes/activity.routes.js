import express from "express";
import { getActivity } from "../controllers/activity.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/:projectId", getActivity);

export default router;