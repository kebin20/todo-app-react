/* eslint-disable react/prop-types */
import React, { useState, createContext, ReactNode } from "react";
import { ThemeContextType, Props } from "./interfaces";

//https://stackoverflow.com/questions/73880660/how-should-fix-createcontext-error-in-typescript-react-ts-auth-with-contexts
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

function ThemeContextProvider(props: Props) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
