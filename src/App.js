import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';
import ScrollToTop from './component/ScrollToTop';
import AboutUsV1 from './pages/AboutUsV1';
import ContactPage from './pages/ContactPage';
import Career from './pages/Career';
import ServiceDetails from './component/ServiceDetails';
import VisionMission from './pages/VisionMission';
import OurTeam from './pages/OurTeam';
import OurOnSite from './pages/OurOnSite';
import Leadership from './pages/LeaderShip';
import Milestone from './pages/Milestone';
import OffSiteSolution from './pages/OffSiteSolution';
import Blog from './pages/Blog';


function App() {
  return (

    <>
     <ScrollToTop />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/project" element={<Project />} />
     <Route path="/project-details" element={<ProjectDetails />} />
     <Route path="/about-us" element={<AboutUsV1 />} />
     <Route path="/contact" element={<ContactPage />} />
     <Route path="/careers" element={<Career />} />
     <Route path="/services" element={<ServiceDetails />} />
     <Route path="/vision-mission" element={<VisionMission />} />
     <Route path='/our-team' element={<OurTeam />} />
     <Route path='/onsite' element={<OurOnSite />} />
     <Route path='/leadership' element={<Leadership />} />
     <Route path="/milestone" element={<Milestone />} />
     <Route path="/offsite" element={<OffSiteSolution />} />
     <Route path="/blog" element={<Blog />} />

    </Routes>
    </>
   
  );
}

export default App;
