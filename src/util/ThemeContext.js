import { createContext } from "react";

const ThemeContext = createContext({
    darkTheme: false,
    updateTheme: () => {

    }
})


export default ThemeContext