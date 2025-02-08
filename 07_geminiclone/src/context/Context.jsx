import { createContext, useEffect, useState } from "react";
import run from '../config/gemini';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [text, settext] = useState("");
    const [recentprompt, setrecentprompt] = useState("");
    const [prevprompt, setprevprompt] = useState([]);
    const [result, setresult] = useState(false);
    const [loading, setloading] = useState(true);
    const [resultdata, setresultdata] = useState("");

    const delaypara = (wordsArray) => {
        setresultdata(""); // Reset once
        let index = 0;
        let accumulatedText = "";
    
        const interval = setInterval(() => {
            if (index < wordsArray.length) {
                accumulatedText += wordsArray[index] + " ";
                setresultdata(accumulatedText); // Only 1 state update per word
                index++;
            } else {
                clearInterval(interval); // Stop when done
            }
        }, 75);
    };

    const newChat= () =>{
        setloading(false);
        setresult(false);
    }
    

    const onSent = async (prompt) => {
        setresult("");
        setloading(true);
        setresult(true);
        let response;
        if(prompt!==undefined){
            response=await run(prompt);
            setrecentprompt(prompt);
        }
        else{
            response=await run(text);
            setrecentprompt(input);
            setprevprompt([...prevprompt,text]);
        }
        // const response = await run(text);
        let responsearray = response.split("**");
        let newresponse = "";

        for (let i = 0; i < responsearray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newresponse += responsearray[i];
            } else {
                newresponse += "<b>" + responsearray[i] + "</b>";
            }
        }

        let newresponse2 = newresponse.split("*").join("</br>");
        setrecentprompt(text);

        let newresponsearray = newresponse2.split(" ");
        // Call delaypara once instead of looping
        delaypara(newresponsearray);

        setloading(false);
        settext("");
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
        newChat,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
