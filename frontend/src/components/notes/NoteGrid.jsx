import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import useNoteStore from "../../store/noteStore";

const NoteGrid = ({ subjectId }) => {
  const { notes, fetchNotes, deleteNote } = useNoteStore();

  useEffect(() => {
    if (subjectId) {
      fetchNotes(subjectId); // fetch only notes for this subject
    }
  }, [subjectId, fetchNotes]);

  if (!notes || notes.length === 0) {
    return <p className="text-gray-500">No notes for this subject yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <div
          key={note._id}
          className="bg-white dark:bg-zinc-800 shadow-md p-4 rounded-xl"
        >
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
