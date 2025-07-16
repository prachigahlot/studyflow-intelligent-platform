import { create } from "zustand";
import axios from "../utils/api";

const useSubjectStore = create((set) => ({
  subjects: [],
  loading: false,
  fetchSubjects: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/subjects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ subjects: res.data, loading: false });
    } catch (error) {
      console.error("Fetch failed", error);
      set({ loading: false });
    }
  },
  addSubject: async (name) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "/api/subjects",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.error("Create failed", err);
    }
  },
}));

export default useSubjectStore;
