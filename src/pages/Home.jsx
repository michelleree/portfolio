import Contact from "../components/Contact.jsx";
import catSvg from "../assets/images/cat.svg";
import clip from "../assets/images/realistic_binder_clip.svg";
import dragon from "../assets/images/dragon.svg";
import astrology from "../assets/images/astrology.png";
import bunny from "../assets/images/bunny.png";
import letter from "../assets/images/letter.png";
import sakura from "../assets/images/sakura.png";
import file from "../assets/images/file.png";
import me from "../assets/images/me.png";
import "../styles/Home.css";

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
                <img src={clip} alt="clip" className="clip"/>
                <img src={catSvg} alt="sleeping cat" className="cat"/>
                <img src={bunny} alt="bunny" className="bunny"/>
                <img src={sakura} alt="sakura" className="sakura1"/>
                <img src={sakura} alt="sakura" className="sakura2"/>

                <div className="intro-card">
                    <h1>Michelle</h1>
                    <div className="quote">
                        <p>Just like a cat, I know how to find the best spots— whether it’s in code or design!</p>
                    </div>
                </div>
            </section>


            <section className="welcome">
                <div className="welcome1">
                    <div className="welcome-background-elements">
                        <img src={file} alt="file" className="file1"/>
                    </div>
                    <div>
                        <img src={clip} alt="clip" className="welcome-clip"/>
                        <div className="welcome-title"><h2>Welcome</h2></div>
                        <img src={me} alt="me" className="me"/>
                    </div>
                </div>
                <div className="welcome2">
                    <div className="welcome-background-elements2">
                        <img src={file} alt="file" className="file2"/>
                    </div>
                    <div className="welcome2-text">
                        <h3>Hello, you</h3>
                        <p>
                            My name is Michelle :). I am currently doing my bachelor’s degree as Computer Science
                            with a specialization in Design and Management at the University of Applied Sciences
                            and Arts Northwestern Switzerland (FHNW).
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Recent Projects</h2>
                <div>
                    <h3>Project 1</h3>
                </div>
            </section>

            <Contact/>
        </main>
    );
}
