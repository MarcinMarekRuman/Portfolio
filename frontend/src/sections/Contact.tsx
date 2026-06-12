import "../styles/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                <span className="section-tag">Contact</span>

                <h2>Let's Work Together</h2>

                <p>
                    I'm open to new opportunities and interesting projects.
                    Feel free to get in touch.
                </p>

                <div className="contact-cards">

                    <a
                        href="mailto:twojemail@gmail.com"
                        className="contact-card"
                    >
                        <FaEnvelope />
                        <div>
                            <h3>Email</h3>
                            <span>twojemail@gmail.com</span>
                        </div>
                    </a>

                    <a
                        href="https://github.com/MarcinMarekRuman"
                        target="_blank"
                        className="contact-card"
                    >
                        <FaGithub />
                        <div>
                            <h3>GitHub</h3>
                            <span>github.com/MarcinMarekRuman</span>
                        </div>
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        className="contact-card"
                    >
                        <FaLinkedin />
                        <div>
                            <h3>LinkedIn</h3>
                            <span>Connect with me</span>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
}