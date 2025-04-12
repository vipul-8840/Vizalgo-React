import { createContext, useContext, useEffect, useState } from "react";
 const themeContext = createContext();
export function ThemeProvider({children})
{
    const[darkMode,setDarkMode]=useState(localStorage.getItem("theme")=="dark" );

    useEffect(()=>{
        if(darkMode)
        {
            console.log(darkMode)
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            console.log(darkMode)
             document.documentElement.classList.remove('dark');
             localStorage.setItem('theme','white');


        }

    },[darkMode])

    return (
        <themeContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </themeContext.Provider>
         
    )
}

export const useDarkMode= ()=>{
    return useContext(themeContext);
}