// src/components/notes/NoteForm.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useNoteStore from "../../store/noteStore";

const NoteForm = ({ subjectId }) => {
  const { createNote, fetchNotes } = useNoteStore();
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) =>
    setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note.title.trim() && !note.content.trim()) return;

    // Pass subjectId to backend/store so the note is linked correctly
    await createNote({ ...note, subjectId });
    await fetchNotes(subjectId);

    setNote({ title: "", content: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-xl shadow"
    >
      <Input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <Textarea
        name="content"
        placeholder="Note content..."
        rows={4}
        value={note.content}
        onChange={handleChange}
      />
      <Button type="submit" className="w-full">
        Save Note
      </Button>
    </form>
  );
};

export default NoteForm;
