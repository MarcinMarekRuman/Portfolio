import { navLinks } from "../data/data";
import '../styles/Header.css'
function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a href={`#${link}`}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;