import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/:course" element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;
