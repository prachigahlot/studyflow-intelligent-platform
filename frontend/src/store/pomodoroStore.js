import { create } from "zustand";

export const usePomodoroStore = create((set) => ({
  isRunning: false,
  mode: "session", // "session" or "break"
  timeLeft: 25 * 60, // in seconds
  tasks: [],
  
  startTimer: () => set({ isRunning: true }),
  pauseTimer: () => set({ isRunning: false }),
  resetTimer: () =>
    set((state) => ({
      isRunning: false,
      timeLeft: state.mode === "session" ? 25 * 60 : 5 * 60
    })),
  switchMode: () =>
    set((state) => ({
      mode: state.mode === "session" ? "break" : "session",
      timeLeft: state.mode === "session" ? 5 * 60 : 25 * 60
    })),

  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, { id: Date.now(), text: task }] })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }))
}));
