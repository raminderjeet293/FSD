import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Students() {
  const { course } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/students/${course}`)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, [course]);

  return (
    <div>
      <h2>{course} Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {/* <img
              src={`http://localhost:5000${student.profilePic}`}
              alt={student.name}
              width="100"
            /> */}
            <p>
              <strong>{student.name}</strong>
            </p>
            <p>Email: {student.email}</p>
            <p>Mobile: {student.mobile}</p>
            <p>Address: {student.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
