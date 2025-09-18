import {useState} from "react";
import {Link} from "react-router-dom";

function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <nav>
            <div className="logo">
                {/*<img src="assets/Logo64x64.png" alt="logo"/>*/}
                <h1>m.</h1>
            </div>
            <ul className={`menubar ${isNavActive ? "active" : ""}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div
                className={`hamburger ${isNavActive ? "hamburger-active" : ""}`}
                onClick={toggleNav}
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    );
}

export default Navbar;