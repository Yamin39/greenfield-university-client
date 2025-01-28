import { createContext } from "react";
import runChat from "./gemeni";

export const Context = createContext();

const ContextProvider = (props) => {

  const onSent = async (prompt) => {
    // Call runChat and return its result
    return await runChat(prompt);
  };

  const value = {
    onSent,
  };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
