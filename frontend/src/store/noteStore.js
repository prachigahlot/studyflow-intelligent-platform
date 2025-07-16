// src/store/noteStore.js
import { create } from "zustand";
import axios from "../utils/api";

const useNoteStore = create((set) => ({
  notes: [],
  loading: false,

  fetchNotes: async (subjectId) => {
    set({ loading: true });
    try {
      const { data } = await axios.get(`/notes/subject/${subjectId}`);
      set({ notes: data });
    } catch (err) {
      console.error(err);
    } finally {
      set({ loading: false });
    }
  },

  createNote: async (noteData) => {
    try {
      const { data } = await axios.post("/notes", noteData);
      set((state) => ({ notes: [...state.notes, data] }));
    } catch (err) {
      console.error(err);
    }
  },

  deleteNote: async (noteId) => {
    try {
      await axios.delete(`/notes/${noteId}`);
      set((state) => ({
        notes: state.notes.filter((n) => n._id !== noteId),
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useNoteStore;
