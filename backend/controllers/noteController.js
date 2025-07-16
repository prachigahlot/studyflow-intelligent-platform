import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";

// Create a new note
export const createNote = asyncHandler(async (req, res) => {
  const { title, content, subjectId } = req.body;

  if (!title || !content || !subjectId) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const note = await Note.create({
    title,
    content,
    subject: subjectId,
    user: req.user._id,
  });

  res.status(201).json(note);
});

// Get all notes for a subject
export const getNotesBySubject = asyncHandler(async (req, res) => {
  const { subjectId } = req.params;

  const notes = await Note.find({
    subject: subjectId,
    user: req.user._id,
  }).sort({ createdAt: -1 });

  res.status(200).json(notes);
});

// Get a single note
export const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  res.status(200).json(note);
});

// Delete a note
export const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  res.status(200).json({ message: "Note deleted" });
});
