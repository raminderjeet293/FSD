import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Student Management System</h1>
      <h2>Explore Courses</h2>
      <div className="button-container">
        <Link to="/students/MCA" className="nav-button">
          MCA
        </Link>
        <br></br>
        <Link to="/students/MCA" className="nav-button">
          BCA
        </Link>
        <br></br>
        <Link to="/students/BBA" className="nav-button">
          BBA
        </Link>
        <br></br>
        <Link to="/students/MBA" className="nav-button">
          MBA
        </Link>
      </div>
    </div>
  );
}

export default Home;
