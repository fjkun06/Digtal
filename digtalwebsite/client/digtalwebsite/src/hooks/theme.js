/* eslint-disable no-unused-vars */
import { createContext , useState} from "react";

export const ThemeContext = createContext();


export default function ThemeProvider({children}){
    const [theme,setTheme] = useState(theme=>"dark")
    const useTheme = ()=> theme === "dark" ? setTheme(theme=>"light"): setTheme(theme=>"dark")

    return (
        <ThemeContext.Provider value={{theme, useTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}