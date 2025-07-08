import { createContext } from "react";

const ThemeContext = createContext({
    darkTheme: false,
    userName: "Default User"
})


export default ThemeContext