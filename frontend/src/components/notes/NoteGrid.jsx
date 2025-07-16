// src/components/dashboard/NoteGrid.jsx
import useNoteStore from "../../store/noteStore";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NoteGrid = ({ subjectId }) => {
  const { notes, fetchNotes, deleteNote } = useNoteStore();

  useEffect(() => {
    if (subjectId) fetchNotes(subjectId);
  }, [subjectId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <div key={note._id} className="bg-white dark:bg-zinc-800 shadow-md p-4 rounded-xl">
          <h2 className="text-lg font-semibold">{note.title}</h2>
          <p className="text-sm text-muted">{note.content}</p>
          <Button
            onClick={() => deleteNote(note._id)}
            className="mt-2"
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default NoteGrid;
