import { createContext, useEffect, useState } from "react";
import run from '../config/gemini';

export const Context = createContext();


const ContextProvider = ({ children }) => {

    const [text,settext] =useState("");
    const [recentprompt,setrecentprompt]= useState("");
    const [prevprompt,setprevprompt]= useState([]);
    const [result,setresult]= useState(false);
    const [loading, setloading]= useState(false);
    const [resultdata,setresultdata]= useState("");



    const onSent = async (prompt) => {
        setresult("");
        setloading(true);
        const response= await run(text);
        setresult(true);
        setrecentprompt(text);
        setresultdata(response);
        setloading(false);
        settext("");
        // setprevprompts(.)
    };

    const contextValue = {
        prevprompt,
        setprevprompt,
        onSent,
        setrecentprompt,
        recentprompt,
        result,
        loading,
        resultdata,
        text,
        settext,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
