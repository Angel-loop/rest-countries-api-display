import { createContext, useContext, useState } from "react";


const Context = createContext()

export function LoadingProvider({children}){
    
    const [loading, setLoading] = useState(false)

    return(
        <Context.Provider value={[loading, setLoading]} >{children}</Context.Provider>
    )
}

export function useLoadContext(){
    return useContext(Context)
}