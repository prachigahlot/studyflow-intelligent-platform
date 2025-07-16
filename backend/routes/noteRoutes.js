import express from "express";

import {
  createNote,
  getNotesBySubject,
  getNoteById,
  deleteNote,
} from "../controllers/noteController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNote);
router.get("/subject/:subjectId", protect, getNotesBySubject);
router.get("/:id", protect, getNoteById);
router.delete("/:id", protect, deleteNote);

export default router;
