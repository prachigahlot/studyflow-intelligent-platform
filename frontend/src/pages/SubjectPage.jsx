import { useParams } from "react-router-dom";
import NoteForm from "../components/notes/NoteForm";
import NoteGrid from "../components/notes/NoteGrid";

const SubjectPage = () => {
  const { id: subjectId } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Notes for Subject</h2>
      <NoteForm subjectId={subjectId} />
      <NoteGrid subjectId={subjectId} />
    </div>
  );
};

export default SubjectPage;

