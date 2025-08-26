import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';
import ScrollToTop from './component/ScrollToTop';
import AboutUsV1 from './pages/AboutUsV1';

function App() {
  return (

    <>
     <ScrollToTop />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/project" element={<Project />} />
     <Route path="/project-details" element={<ProjectDetails />} />
     <Route path="/about-us" element={<AboutUsV1 />} />
    </Routes>
    </>
   
  );
}

export default App;
