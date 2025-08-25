import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/project" element={<Project />} />
     <Route path="/project-details" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
