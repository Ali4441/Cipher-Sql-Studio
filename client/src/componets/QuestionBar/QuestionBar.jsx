import "./Questionbar.scss"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const QuestionBar = () => {


  const { id } = useParams();

  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    const getAssignment = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/assignments/${id}`);

        setAssignment(res.data);
      } catch (error) {
        console.error(error);
      }

    };

    getAssignment();
  }, [id]);

  if (!assignment) return <div>Loading...</div>;
  return (
    <div className="q-bar">

      <div className="q-bar__crumb">
        <span >
          Assignments
        </span>
        <span>›</span>
        <span>#{assignment.id}</span>
      </div>

      <div className="q-bar__head">
        <h2 className="q-bar__title">{assignment.title}</h2>

        <span
          className={`badge badge--${assignment.difficulty}`}
          style={{ flexShrink: 0 }}
        >
          {assignment.difficulty}
        </span>
      </div>

      <p className="q-bar__text">
        {assignment.description}
      </p>

    </div>
  );
};

export default QuestionBar;