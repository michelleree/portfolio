import Contact from "../components/Contact.jsx";
import catSvg from "../assets/images/cat.svg";
import clip from "../assets/images/realistic_binder_clip.svg";
import dragon from "../assets/images/dragon.svg";
import astrology from "../assets/images/astrology.png";
import bunny from "../assets/images/bunny.png";
import letter from "../assets/images/letter.png";
import sakura from "../assets/images/sakura.png";
import me from "../assets/images/me.png";
import "../styles/Home.css";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <main>
            <section className="intro">
                <div className="intro-background-elements">
                    <img src={dragon} alt="dragon" className="dragon"/>
                    <img src={astrology} alt="astrology map" className="astrology"/>
                    <img src={letter} alt="letter" className="letter1"/>
                    <img src={letter} alt="letter" className="letter2"/>
                </div>

                <div className="intro-card">
                    <img src={bunny} alt="bunny" className="bunny"/>
                    <img src={clip} alt="clip" className="clip"/>
                    <img src={catSvg} alt="sleeping cat" className="cat"/>
                    <img src={sakura} alt="sakura" className="sakura1"/>
                    <img src={sakura} alt="sakura" className="sakura2"/>
                    <h1>Michelle</h1>
                    <div className="quote">
                        <p>Just like a cat, I know how to find the best spots— whether it’s in code or design!</p>
                    </div>
                </div>
            </section>

            <section className="welcome">
                <div className="welcome1">
                    <div className="welcome-card">
                        <img src={clip} alt="clip" className="welcome-clip"/>
                        <div className="welcome-title"><h2>Welcome</h2></div>
                        <img src={me} alt="me" className="me"/>
                    </div>
                </div>
                <div className="welcome2">
                    <div className="welcome-background-elements">

                    </div>
                    <div className="welcome2-text">
                        <h3>Hello, you</h3>
                        <p>
                            My name is Michelle :). I am currently doing my bachelor’s degree as Computer Science
                            with a specialization in Design and Management at the University of Applied Sciences
                            and Arts Northwestern Switzerland (FHNW).
                        </p>
                    </div>
                    <div className="squares">
                        <div className="square square1"></div>
                        <div className="square square2"></div>
                        <div className="square square3"></div>
                    </div>
                </div>
            </section>

            <section className="projects">
                <div className="project-header">
                    <h3>Recent Projects</h3>
                    <Link to="/work">view all →</Link>
                </div>
                <div className="projects-container">
                    <div className="project-card">
                        <div className="project-image"></div>
                        <h4>Project 1</h4>
                    </div>
                    <div className="project-card">
                        <div className="project-image"></div>
                        <h4>Project 1</h4>
                    </div>
                    <div className="project-card">
                        <div className="project-image"></div>
                        <h4>Project 1</h4>
                    </div>
                    <div className="project-card">
                        <div className="project-image"></div>
                        <h4>Project 1</h4>
                    </div>
                    <div className="project-card">
                        <div className="project-image"></div>
                        <h4>Project 1</h4>
                    </div>
                </div>
            </section>

            <Contact/>
        </main>
    );
}
