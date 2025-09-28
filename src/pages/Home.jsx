import ContactInfo from "../components/ContactInfo.jsx";
import stamp from "../assets/images/stamp.png";
import handwriting from "../assets/images/handwriting.png";
//import stampBG from "../assets/images/stamp-bg.png";
import me from "../assets/images/me.png";
import "../styles/Home.css";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <main>
            <section className="intro-section">
                <div className="letter">
                    <div className="letter-header">
                        <div className="letter-header-text">
                            <h3>new york blabla</h3>
                            <p>NEW YORK CITY BLABLA NEW YORK CITY BLABLANEW YORK CITY BLABLANEW YORK CITY BLABLANEW YORK
                                CITY BLABLA NEW YORK CITY BLABLA
                            </p>
                        </div>
                        <img src={stamp} alt="stamp"/>
                    </div>
                    <div className="letter-text">
                        <h2>Dearest you,</h2>
                        <img src={handwriting} alt="handwriting"/>
                    </div>
                </div>
            </section>

            <section className="welcome-section">
                <div className="welcome-container">
                    <div className="welcome-container-part1">
                        <div className="welcome-container-part1-h2">
                            <h2>Welcome!</h2>
                        </div>
                        <img src={me} alt="me" className="me-img"/>
                        {/*<img src={stampBG} alt="stampBG" className="stampBG"/>*/}
                    </div>
                    <div className="welcome-container-part2">
                        <div className="welcome-container-part2-text">
                            <h3>Hello, you</h3>
                            <p>My name is Michelle :). I am currently doing my bachelor’s degree as Computer Science
                                with a specialization in Design and Management at the University of Applied Sciences and
                                Arts Northwestern Switzerland (FHNW).</p>
                        </div>
                        <div className="welcome-container-part2-images">
                            <div className="bitch"></div>
                            <div className="bitch"></div>
                            <div className="bitch"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects-section">
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

            <ContactInfo/>
        </main>
    );
}
