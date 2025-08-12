import PomodoroTimer from "../components/pomodoro/PomodoroTimer";
import TaskInput from "../components/pomodoro/TaskInput";
import TaskList from "../components/pomodoro/TaskList";

export default function PomodoroPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Pomodoro Timer ⏳</h1>
      <PomodoroTimer />
      <div className="space-y-4">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}
