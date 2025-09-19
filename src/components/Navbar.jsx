import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar-container">
            <li>
                <Link to="/" onClick={toggleNav} className="logo">m.</Link>
            </li>
            <div
                className={`hamburger-lines ${isNavOpen ? "hamburger-active" : ""}`}
                onClick={toggleNav}
            >
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className={`menu-items ${isNavOpen ? "active" : ""}`}>
                <li>
                    <Link to="/work" onClick={toggleNav}>my work</Link>
                </li>
                <li>
                    <Link to="/experience" onClick={toggleNav}>my experience</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={toggleNav}>contact me</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;