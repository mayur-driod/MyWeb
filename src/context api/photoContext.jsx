import { createContext, useState } from "react";

export const authcontext=createContext();

 export const AuthProvider=({children})=>{
    const [user,setUser]=useState(false)
    return(
        <authcontext.Provider value={{user,setUser}}>
            {children}
        </authcontext.Provider>
    )
}