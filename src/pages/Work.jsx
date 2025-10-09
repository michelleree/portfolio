import ContactInfo from "../components/ContactInfo.jsx";
import "../styles/Work.css";
// import filmStripe from "../assets/images/film stripe.png";
import { Link } from 'react-router-dom';
import { projects } from '../data/projectData.js'; // Daten importiert

export default function Work() {
    return (
        <main>
            <section className="work-intro">
                <h2>My Work & Experience</h2>
                <div>
                    <div className="stripe1"></div>
                </div>
                <div>
                    <p>Take a look at my work from university as well as some personal projects.
                        Keep in my mind that for all my work I use AI in many different ways to help me. None of my work
                        is
                        done 100% with AI, but I use it for coding and to help me generate ideas.
                        If you have any questions or concerns, feel free to reach out.</p>
                </div>
                <div>
                    <div className="stripe2"></div>
                </div>
            </section>

            <section className="projects-overview">
                {projects.map((group) => (
                    <div className="category-section" key={group.category}>
                        <h3>{group.category}</h3>
                        <div className="category-projects">
                            {group.items.map((project) => (
                                // Der Link navigiert zur Detailseite und übergibt den 'slug' als URL-Parameter
                                <Link to={`/project/${project.slug}`} key={project.slug}>
                                    <div
                                        className="ps"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                        title={project.title} // Für bessere Zugänglichkeit
                                    >
                                        {/* Hier können Sie z.B. den Titel overlayen, wenn das ps-div dafür gestylt ist */}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <div>
                <div className="stripe2"></div>
            </div>
            <ContactInfo/>
        </main>
    );
}