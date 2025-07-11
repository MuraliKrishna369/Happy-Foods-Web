import { createContext } from "react";

const ThemeContext = createContext({
    darkTheme: false,
    updateTheme: () => {

    },
    userName: "Default User"
})


export default ThemeContext