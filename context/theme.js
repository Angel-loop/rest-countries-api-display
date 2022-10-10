import { useContext, createContext, useState } from "react";

const Context = createContext()


export function ThemeProvider({children}){
    const [darkMode, setDarkMode] = useState(true)

    return( 
        <Context.Provider value={[darkMode, setDarkMode]}>{children}</Context.Provider>
    )
}

export function useThemeContext(){
    return useContext(Context)
} 