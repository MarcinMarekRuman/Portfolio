import { useState } from "react";
import "../styles/Projects.css";

type ProjectCategory = "github" | "wordpress";

export default function Projects() {
    const [activeCategory, setActiveCategory] =
        useState<ProjectCategory>("github");

    const projects = {
        github: [
            {
                title: "Beacon Navigation System",
                description:
                    "Aplikacja do nawigacji wewnątrz budynków oparta o beacony BLE, backend API oraz panel administracyjny.",
                technologies: ["React", "TypeScript", "Node.js", "Prisma"],
                github: "#",
                live: "#",
            },
            {
                title: "Job Scraper",
                description:
                    "Python scraper pobierający oferty pracy i filtrujący je według wybranych kryteriów.",
                technologies: ["Python", "BeautifulSoup", "Requests"],
                github: "#",
                live: "#",
            },
        ],
        wordpress: [
            {
                title: "Sklep internetowy WooCommerce",
                description:
                    "Strona e-commerce oparta o WordPress i WooCommerce z konfiguracją produktów, płatności oraz dostaw.",
                technologies: ["WordPress", "WooCommerce", "Elementor"],
                github: "",
                live: "#",
            },
            {
                title: "Strona firmowa",
                description:
                    "Responsywna strona wizytówkowa dla firmy z sekcjami ofertowymi, formularzem kontaktowym i optymalizacją UX.",
                technologies: ["WordPress", "Elementor", "CSS"],
                github: "",
                live: "#",
            },
        ],
    };

    const categories = [
        { id: "github", label: "GitHub Projects" },
        { id: "wordpress", label: "WordPress Websites" },
    ] as const;

    return (
        <section className="projects-section" id="portfolio">
            <div className="projects-container">
                <span className="section-tag">Portfolio</span>
                <h2>Selected Projects</h2>

                <div className="projects-tabs">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`projects-tab ${activeCategory === category.id ? "active" : ""
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {projects[activeCategory].map((project) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-image">
                                <span>{project.title}</span>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank">
                                            GitHub
                                        </a>
                                    )}

                                    {project.live && (
                                        <a href={project.live} target="_blank">
                                            Live Preview
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}