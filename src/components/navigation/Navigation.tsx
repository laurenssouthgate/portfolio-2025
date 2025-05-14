import { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Content } from "../../model/Content";
import "./Navigation.css";

export const Navigation = () => {
    const { setContent } = useContext(ContentContext);

    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => setContent(Content.Home)}>
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => setContent(Content.About)}>
                        About
                    </button>
                </li>
                <li>
                    <button onClick={() => setContent(Content.Projects)}>
                        Projects
                    </button>
                </li>
                <li>
                    <button onClick={() => setContent(Content.Contact)}>
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
