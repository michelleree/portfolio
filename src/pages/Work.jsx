import ContactInfo from "../components/ContactInfo.jsx";
import "../styles/Work.css";
import filmStripe from "../assets/images/film stripe.png";

export default function Work() {
    return (
        <main>
            <h2>My Work & Experience</h2>
            <div>
                <img src={filmStripe} alt="Film Stripe"/>
            </div>
            <div>
                <p>Take a look at my work from university as well as some personal projects.
                    Keep in my mind that for all my work I use AI in many different ways to help me. None of my work is
                    done 100% with AI, but I use it for coding and to help me generate ideas.
                    If you have any questions or concerns, feel free to reach out.</p>
            </div>
            <div>
                <img src={filmStripe} alt="Film Stripe"/>
            </div>
            <div className="projects-overview">
                <div className="project">

                </div>
            </div>
            <div>
                <img src={filmStripe} alt="Film Stripe"/>
            </div>
            <ContactInfo/>
        </main>
    );
}