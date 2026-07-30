// ThemeProvider.tsx
import type {ReactNode} from "react";
import {useState} from "react";
import {ThemeContext} from "./ThemeContext";
import type {theme} from "./ThemeContext";

interface Props {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setThemeState] = useState<theme>("white");

    const setTheme = (theme: theme) => {
        setThemeState(theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};