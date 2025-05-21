import { createContext } from "react";
import type { ContentType } from "../model/Content";

interface ContentContextType {
    content: ContentType;
    setContent: (content: ContentType) => void;
}

export const ContentContext = createContext<ContentContextType>({
    content: 'home',
    setContent: () => {},
});


