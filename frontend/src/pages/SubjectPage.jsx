import { useParams } from "react-router-dom";
import NoteForm from "../components/notes/NoteForm";
import NoteGrid from "../components/notes/NoteGrid";

export default function SubjectPage() {
  const { id: subjectId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notes for Subject</h1>
      <NoteForm subjectId={subjectId} />
      <NoteGrid subjectId={subjectId} />
    </div>
  );
}
