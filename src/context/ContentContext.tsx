import { createContext } from "react";
import { Content } from "../model/Content";


export const ContentContext = createContext<Content>(Content.Home);


