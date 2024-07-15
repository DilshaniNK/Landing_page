import React,{createContext,useEffect,useState} from "react";
export const UseContext=createContext();

export const Parent=({children})=>{
    const [theme,setTheme]=useState('light');

    const toggleTheme=()=>{
        setTheme(prevTheme => prevTheme==='light'?'dark' :'light');
    };
    useEffect(()=>{
        document.body.style.backgroundColor = theme==='light' ? '#fff':'#000';
        document.body.style.color = theme==='light' ? '#000' : '#fff';
    },[theme]);

    return(
        <UseContext.Provider value={{theme,toggleTheme}}>
            {children}
        </UseContext.Provider>
    );
};