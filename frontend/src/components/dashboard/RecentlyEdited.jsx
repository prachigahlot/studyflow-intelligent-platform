import { motion } from "framer-motion";

const notes = [
  { title: "Recursion Notes", updated: "1 hr ago" },
  { title: "Linked Lists Summary", updated: "3 hrs ago" },
];

const RecentlyEdited = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Recently Edited Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((note, i) => (
           <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow"
  >
    <h3 className="font-semibold">{note.title}</h3>
    <p className="text-sm text-gray-500">Last updated: {note.updated}</p>
  </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyEdited;

