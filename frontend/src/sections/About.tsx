import "../styles/About.css";
export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">

                

                <div className="about-right">
                    <div className="about-card">
                        <h3>Location</h3>
                        <p>Warsaw, Poland</p>
                    </div>

                    <div className="about-card">
                        <h3>Status</h3>
                        <p>Open to Work</p>
                    </div>

                    <div className="about-card">
                        <h3>Focus</h3>
                        <p>React • TypeScript • Node.js</p>
                    </div>

                    <div className="about-card">
                        <h3>Goal</h3>
                        <p>Building scalable and modern applications.</p>
                    </div>
                </div>

                <div className="about-left">
                    <span className="section-tag">About Me</span>

                    <h2>
                        Passionate about creating
                        <span> modern web applications.</span>
                    </h2>

                    <p>
                        Jestem Full Stack Developerem specjalizującym się w
                        React, TypeScript oraz Node.js. Lubię tworzyć
                        nowoczesne aplikacje webowe, rozwijać backendy oraz
                        projektować rozwiązania skupione na wydajności i
                        dobrym doświadczeniu użytkownika.
                    </p>

                    <p>
                        Nieustannie rozwijam swoje umiejętności, realizując
                        własne projekty i poznając nowe technologie.
                    </p>
                </div>

            </div>
        </section>
    );
}