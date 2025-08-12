import { usePomodoroStore } from "../../store/pomodoroStore";

export default function TaskList() {
  const { tasks, removeTask } = usePomodoroStore();

  return (
    <div>
      <h3 className="font-semibold mb-2">Tasks</h3>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between border p-2 rounded">
            <span>{task.text}</span>
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 font-bold"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
