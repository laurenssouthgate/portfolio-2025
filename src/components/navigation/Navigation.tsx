import { useContext, useState } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Content } from "../../model/Content";
import type { ContentType } from "../../model/Content";
import "./Navigation.css";

export const Navigation = () => {
    const { setContent } = useContext(ContentContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (content: ContentType) => {
        setContent(content);
        setIsMenuOpen(false);
    };

    return (
        <nav className="nav">
            <button 
                className={`burger-menu ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu} 
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={isMenuOpen ? 'mobile-menu-open' : ''}>
                <li>
                    <button onClick={() => handleNavClick(Content.Home)}>
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavClick(Content.About)}>
                        About
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavClick(Content.Projects)}>
                        Projects
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => window.open("https://www.nextlevelcoding.blog/", "_blank", "noopener,noreferrer")}
                        title="Next Level Coding Blog"
                    >
                        Blog
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavClick(Content.Contact)}>
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
