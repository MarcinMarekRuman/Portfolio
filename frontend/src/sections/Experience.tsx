import "../styles/Experience.css";

export default function Experience() {
    const experiences = [
        {
            year: "2025 - obecnie",
            title: "Full Stack Developer",
            company: "Własne projekty",
            description:
                "Tworzenie aplikacji webowych z wykorzystaniem React, TypeScript, Node.js, Express, Prisma oraz PostgreSQL.",
        },
        {
            year: "2024 - 2025",
            title: "WordPress / WooCommerce Developer",
            company: "Projekty komercyjne",
            description:
                "Budowa stron internetowych oraz sklepów WooCommerce, konfiguracja płatności, dostaw, produktów i optymalizacja UX.",
        },
        {
            year: "2023 - 2024",
            title: "Frontend Developer",
            company: "Nauka i projekty",
            description:
                "Rozwój umiejętności w HTML, CSS, JavaScript, React oraz TypeScript poprzez realizację własnych projektów.",
        },
        {
            year: "LG Electronics",
            title: "Techniczne doświadczenie zawodowe",
            company: "Praca techniczna",
            description:
                "Doświadczenie w pracy technicznej, rozwiązywaniu problemów, analizie usterek oraz pracy z dokumentacją.",
        },
    ];

    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <span className="section-tag">Experience</span>
                <h2>My Journey</h2>

                <div className="timeline">
                    {experiences.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot" />

                            <div className="timeline-content">
                                <span className="timeline-year">{item.year}</span>
                                <h3>{item.title}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}