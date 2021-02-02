import {createContext, Dispatch, SetStateAction} from "react";

interface ThemeContextInterface {
    theme: 'dark' | 'light',
    setTheme: Dispatch<SetStateAction<'dark' | 'light'>>
}

export const ThemeContext = createContext<ThemeContextInterface>(undefined!);

