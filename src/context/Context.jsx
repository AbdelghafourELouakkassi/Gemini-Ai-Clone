import { createContext, useState } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  // declare some state data to update later 
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // basic function to  delay the paragraph  that come with the reponse of the api
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData(prev=> prev + nextWord);
    }, 75*index);
  };



  // async function to get the data from the api of gemini ai  

  const onSent = async (prompt) => {

    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt)
    let response ;
    response=await runChat(prompt)
    const findIfTheInputExist=prevPrompts.find(prev=>prev===prompt);
    setPrevPrompts(
      findIfTheInputExist?prev=>[...prev]:prev=>[...prev,prompt]
    )
    


    let responseArray = response.split("**");
    let newResponse="";
    
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let responseArray2=newResponse2.split(" ")

    for (let i = 0; i < responseArray2.length; i++) {
     const nextWord= responseArray2[i]
     delayPara(i,nextWord+" ")
    }

  
    setLoading(false);
    setInput("");

  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
