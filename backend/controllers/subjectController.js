import Subject from "../models/subjectModel.js";
import asyncHandler from "express-async-handler";

// POST /api/subjects
export const createSubject = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const subject = await Subject.create({
    name,
    user: req.user._id,
  });

  res.status(201).json(subject);
};

// GET /api/subjects
export const getSubjects = async (req, res) => {
  const subjects = await Subject.find({ user: req.user._id });
  res.json(subjects);
};

// DELETE /api/subjects/:id
export const deleteSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.findById(req.params.id);

  if (!subject) {
    res.status(404);
    throw new Error("Subject not found");
  }

  await Subject.findByIdAndDelete(req.params.id); // ✅ Fix: use model directly

  res.status(200).json({ message: "Subject deleted" });
});
