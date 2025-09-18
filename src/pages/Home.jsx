import Contact from "../components/Contact.jsx";

export default function Home() {
    return (
        <main>
            <header>
                <h1>this is a header</h1>
                <p>Just like a cat, I know how to find the best spots— whether it’s in code or design!</p>
            </header>

            <section>
                <h2>Hello, you</h2>
                <p>
                    My name is Michelle :). I am currently doing my bachelor’s degree as Computer Science
                    with a specialization in Design and Management at the University of Applied Sciences
                    and Arts Northwestern Switzerland (FHNW).
                </p>
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
