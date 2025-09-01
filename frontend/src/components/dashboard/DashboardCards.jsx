// src/components/dashboard/DashboardCards.jsx
import { useMemo } from "react";
import { motion } from "framer-motion";
// DashboardCards.jsx
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
 // small sparkline
import ChartCard from "./ChartCard"; // adjust path if needed

// Import your stores (adjust relative paths if needed)
import useNoteStore from "../../store/noteStore";
import useSubjectStore from "../../store/subjectStore";
import { usePomodoroStore } from "../../store/pomodoroStore";

/**
 * Utility: returns array of last N days strings e.g. ['Mon','Tue',...]
 */
function getLastNDays(n = 7) {
  const days = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d);
  }
  return days;
}

const DashboardCards = () => {
  // Pull data from stores
  const notes = useNoteStore((s) => s.notes) || [];
  const subjects = useSubjectStore((s) => s.subjects) || [];
  const pomodoroTasks = usePomodoroStore((s) => s.tasks) || [];
  // Optional: you may have a pomodoro sessions count track; if so, use it:
  const pomodoroSessions = usePomodoroStore((s) => s.sessions) || 0;

  // 1) Today's tasks — use pomodoro tasks length (or tasks with today's date if you save timestamps)
  const todaysTasks = pomodoroTasks.length;

  // 2) Pending reviews
  // If notes include nextReviewDate (ISO string), count notes due today or earlier.
  const pendingReviews = useMemo(() => {
    const now = new Date();
    return notes.filter((n) => {
      if (!n.nextReviewDate) return false;
      const d = new Date(n.nextReviewDate);
      return d <= now;
    }).length;
  }, [notes]);

  // 3) Subjects count
  const subjectsCount = subjects.length;

  // 4) Streak calculation — simple approach:
  //   Count consecutive days (from today backward) with at least 1 note created.
  const streak = useMemo(() => {
    if (!notes.length) return 0;
    const byDate = new Set(
      notes.map((n) => {
        const d = n.createdAt || n.created_at || n.created_at_iso || n.created; // try common props
        if (!d) return null;
        const date = new Date(d);
        // normalize to YYYY-MM-DD
        return date.toISOString().slice(0, 10);
      }).filter(Boolean)
    );

    let count = 0;
    const today = new Date();
    let cursor = new Date(today);
    while (true) {
      const key = cursor.toISOString().slice(0, 10);
      if (byDate.has(key)) {
        count++;
        cursor.setDate(cursor.getDate() - 1);
      } else break;
    }
    return count;
  }, [notes]);

  // 5) Chart data: notes created per last 7 days
  const notesPerDay = useMemo(() => {
    const days = getLastNDays(7);
    return days.map((d) => {
      const key = d.toISOString().slice(0, 10);
      const count = notes.filter((n) => {
        const created = n.createdAt || n.created_at || n.created; // adjust according to your backend
        if (!created) return false;
        return created.slice(0, 10) === key;
      }).length;
      // label as short weekday
      const label = d.toLocaleDateString(undefined, { weekday: "short" });
      return { name: label, value: count };
    });
  }, [notes]);

  // 6) Pomodoro chart data - if you track sessions per day/subject, map it here. For now produce a placeholder:
  const pomodoroData = useMemo(() => {
    // if you have sessions by subject store, replace this
    return [
      { name: "Math", value: 5 },
      { name: "Science", value: 3 },
      { name: "History", value: 4 },
    ];
  }, []);

  const cards = [
    { title: "Today's Tasks", value: todaysTasks, spark: notesPerDay.map((d) => d.value) },
    { title: "Pending Reviews", value: pendingReviews, spark: notesPerDay.map((d) => d.value) },
    { title: "Subjects", value: subjectsCount, spark: notesPerDay.map((d) => d.value) },
    { title: "Streak", value: `${streak} days 🔥`, spark: notesPerDay.map((d) => d.value) },
  ];

  return (
    <div className="space-y-6">
      {/* Quick stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400">{card.title}</h3>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{card.value}</div>
              </div>
            </div>

            {/* small sparkline under the value */}
            <div className="mt-3 h-10">
              <ResponsiveSparkline data={card.spark} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Notes Created (Last 7 days)" data={notesPerDay} type="line" />
        <ChartCard title="Pomodoro Sessions (by subject)" data={pomodoroData} type="bar" />
      </div>
    </div>
  );
};

export default DashboardCards;

/* inline tiny sparkline component - keep small & dependency free (uses recharts) */

function ResponsiveSparkline({ data = [] }) {
  const chartData = data.map((v, i) => ({ idx: i, value: v || 0 }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <XAxis dataKey="idx" hide />
        <YAxis hide domain={[0, "dataMax"]} />
        <Tooltip formatter={(v) => `${v}`} />
        <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
