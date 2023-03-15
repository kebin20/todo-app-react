/* eslint-disable react/prop-types */
import React, { useState, createContext, ReactNode } from "react";
import { ThemeContextType } from "./interfaces";

//https://stackoverflow.com/questions/73880660/how-should-fix-createcontext-error-in-typescript-react-ts-auth-with-contexts
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

//https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
type Props = {
  children?: ReactNode;
};

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
