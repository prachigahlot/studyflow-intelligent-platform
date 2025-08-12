import { useEffect } from "react";
import { usePomodoroStore } from "../../store/pomodoroStore";

export default function PomodoroTimer() {
  const { isRunning, mode, timeLeft, startTimer, pauseTimer, resetTimer, switchMode } =
    usePomodoroStore();

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        usePomodoroStore.setState((state) => ({
          timeLeft: state.timeLeft - 1
        }));
      }, 1000);
    } else if (timeLeft === 0) {
      switchMode();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, switchMode]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="text-center space-y-3">
      <h2 className="text-xl font-semibold capitalize">{mode} Time</h2>
      <div className="text-4xl font-bold">{minutes}:{seconds}</div>
      <div className="space-x-2">
        <button onClick={startTimer} className="px-3 py-1 bg-green-500 text-white rounded">
          Start
        </button>
        <button onClick={pauseTimer} className="px-3 py-1 bg-yellow-500 text-white rounded">
          Pause
        </button>
        <button onClick={resetTimer} className="px-3 py-1 bg-red-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
