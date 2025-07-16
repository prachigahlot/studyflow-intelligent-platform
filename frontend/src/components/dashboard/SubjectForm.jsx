// src/components/Dashboard/SubjectForm.jsx
import { useState } from "react";
import useSubjectStore from "../../store/subjectStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubjectForm = () => {
  const [name, setName] = useState("");
  const { addSubject, fetchSubjects } = useSubjectStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await addSubject(name);
    await fetchSubjects();
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter subject name"
        className="max-w-sm"
      />
      
      <Button type="submit">Add Subject</Button>
    </form>
  );
};

export default SubjectForm;
