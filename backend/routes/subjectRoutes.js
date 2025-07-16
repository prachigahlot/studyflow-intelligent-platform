import express from "express";
import {
  createSubject,
  getSubjects,
  deleteSubject,
} from "../controllers/subjectController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createSubject);
router.get("/", protect, getSubjects);
router.delete("/:id", protect, deleteSubject);

export default router;
