import { useState } from "react";
import "../styles/Skills.css";

import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaWordpress,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaGithub
} from "react-icons/fa";

import {
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiPostgresql,
    SiPrisma,
    SiTailwindcss,
    SiWoocommerce,
    SiMysql,
    SiJsonwebtokens
} from "react-icons/si";

type Category = "frontend" | "backend" | "cms" | "tools";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<Category>("frontend");

    const skills = {
        frontend: [
            { icon: <FaReact />, name: "React" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        ],
        backend: [
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express" },
            { icon: <SiPrisma />, name: "Prisma" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <FaPython />, name: "Python" },
            { icon: <SiJsonwebtokens />, name: "JWT" },
            { icon: "API", name: "REST API" },
        ],
        cms: [
            { icon: <FaWordpress />, name: "WordPress" },
            { icon: <SiWoocommerce />, name: "WooCommerce" },
        ],
        tools: [
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <FaGithub />, name: "GitHub" },
            { icon: <FaDocker />, name: "Docker" },
            { icon: "3D", name: "Blender" },
        ],
    };

    const categories = [
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "cms", label: "CMS & E-Commerce" },
        { id: "tools", label: "Tools" },
    ] as const;

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <span className="section-tag">Skills</span>
                <h2>Technologies I Work With</h2>

                <div className="skills-tabs">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`skills-tab ${activeCategory === category.id ? "active" : ""
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {skills[activeCategory].map((skill) => (
                        <div className="skill-card" key={skill.name}>
                            <div className="skill-icon">{skill.icon}</div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}