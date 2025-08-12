// src/store/noteStore.js
import { create } from "zustand";
import axios from "../utils/api";

const useNoteStore = create((set) => ({
  notes: [],
  loading: false,

  // Fetch notes for a specific subject
  fetchNotes: async (subjectId) => {
    set({ loading: true });
    try {
      const { data } = await axios.get(`/notes/subject/${subjectId}`);
      // Ensure each note includes subjectId (backend should already send it)
      set({ notes: data.map(note => ({ ...note, subjectId })) });
    } catch (err) {
      console.error("Error fetching notes:", err);
    } finally {
      set({ loading: false });
    }
  },

  // Create note for a specific subject
  createNote: async (noteData, subjectId) => {
    try {
      const payload = { ...noteData, subjectId };
      const { data } = await axios.post("/notes", payload);
      set((state) => ({ notes: [...state.notes, data] }));
    } catch (err) {
      console.error("Error creating note:", err);
    }
  },

  // Delete note by ID
  deleteNote: async (noteId) => {
    try {
      await axios.delete(`/notes/${noteId}`);
      set((state) => ({
        notes: state.notes.filter((n) => n._id !== noteId),
      }));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  },
}));

export default useNoteStore;
