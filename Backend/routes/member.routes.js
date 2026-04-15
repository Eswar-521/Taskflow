import express from "express";
import {
  addMember,
  getMembers,
  removeMember
} from "../controllers/member.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/:projectId", addMember);
router.get("/:projectId", getMembers);
router.delete("/:id", removeMember);

export default router;