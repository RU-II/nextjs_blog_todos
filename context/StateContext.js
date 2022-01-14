import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState({ id: 0, title: "" });
  return (
    <StateContext.Provider value={{ selectedTask, setSelectedTask }}>
      {children}
    </StateContext.Provider>
  );
};
