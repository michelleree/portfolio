import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<Work/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

            // TODO: correctly implement Navbar
            <Navbar/>

            <div className="menubar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <Footer/>
        </Router>
    );
}

export default App;
