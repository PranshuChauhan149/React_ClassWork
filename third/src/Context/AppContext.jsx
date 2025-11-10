import { Children, createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const name = "pranshu";
  const [theme,setTheme] = useState(true);

  return <AppContext.Provider value={{ name,theme,setTheme }}>
    {children}
  </AppContext.Provider>;
};
