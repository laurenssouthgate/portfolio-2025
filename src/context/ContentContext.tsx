import { createContext } from "react";
import { Content } from "../model/Content";

export type ContentContextType = {
    content: Content;
    setContent: (content: Content) => void;
}


export const ContentContext = createContext<ContentContextType>({
    content: Content.Home,
    setContent: () => {}
});


