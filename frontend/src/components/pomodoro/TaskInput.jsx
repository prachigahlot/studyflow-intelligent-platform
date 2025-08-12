import { useState } from "react";
import { usePomodoroStore } from "../../store/pomodoroStore";

export default function TaskInput() {
  const [task, setTask] = useState("");
  const addTask = usePomodoroStore((state) => state.addTask);

  const handleAdd = () => {
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder="Add a task..."
        className="border p-2 flex-1 rounded"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>
    </div>
  );
}
