import {Link} from "react-router-dom";

function Navbar() {
    const mobileNav = document.querySelector(".hamburger");
    const navbar = document.querySelector(".menubar");

    const toggleNav = () => {
        navbar.classList.toggle("active");
        mobileNav.classList.toggle("hamburger-active");
    };
    mobileNav.addEventListener("click", () => toggleNav());

    return(
        // TODO: finish Navbar component
        <nav>
            <div className="logo">
                <img src="assets/Logo64x64.png" alt="logo"/>
                <h1>LOGO</h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    )
}

export default Navbar;