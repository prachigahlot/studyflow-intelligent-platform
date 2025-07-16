import { motion } from "framer-motion";

const cards = [
  { title: "Today's Tasks", value: 4 },
  { title: "Pending Reviews", value: 2 },
  { title: "Subjects", value: 3 },
  { title: "Streak", value: "5 days 🔥" },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
  >
    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
      {card.title}
    </h2>
    <p className="text-2xl font-bold text-primary mt-2">{card.value}</p>
  </motion.div>
      ))}
    </div>
  );
};

export default DashboardCards;
