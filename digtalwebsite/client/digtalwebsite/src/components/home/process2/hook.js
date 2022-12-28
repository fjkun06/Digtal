import { createContext,useState } from "react";

export const BlurContext = createContext();

export function BlurProvider({children}){

    const [blur,setBlur] = useState(blur=>"")
    
    return (
        <BlurContext.Provider value={{blur,setBlur}}>
            {children}
        </BlurContext.Provider>
    )
}