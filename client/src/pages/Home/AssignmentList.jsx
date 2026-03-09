import './AssingmentList.scss'
import AssignmentsCard from "../../componets/AssignmentsCard/AssignmentsCard";
import axios from "axios";
import { useEffect, useState } from "react";

import HeroCard from "../../componets/HeroCard/HeroCard";


const AssignmentList = () => {

  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://cipher-sql-studio-6s18.onrender.com/api/assignments`)
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>

      <div className='home'>
        <HeroCard />
        <AssignmentsCard assignments={assignments} />
      </div>

    </>
  )
}

export default AssignmentList
