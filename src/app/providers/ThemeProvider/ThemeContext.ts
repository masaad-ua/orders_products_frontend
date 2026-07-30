// ThemeContext.ts
import { createContext } from "react";

export type theme = "white" | "gray" | "popup"

interface ThemeContextProps {
    theme: theme;
    setTheme: (theme:theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "white",
    setTheme: () => {},
});