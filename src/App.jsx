import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/App.css";

function App() {
    return (
        <Router>
            <div className="app-container"> {/* Neues globales div, KEIN padding hier */}
                <Navbar/>
                <div className="main-content-padded">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/work/:projectId" element={<Project/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;