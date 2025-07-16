import { Link } from "react-router-dom";
import useSubjectStore from "../../store/subjectStore";


const SubjectGrid = () => {
  const { subjects } = useSubjectStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {subjects.map((subject) => (
        <Link to={`/subject/${subject._id}`} key={subject._id}>
          <div className="bg-white p-4 shadow rounded hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">{subject.name}</h3>
            <p>{subject.notes?.length || 0} topics</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubjectGrid;
