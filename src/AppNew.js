import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent/FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent/ClassContextComponent";
export const ThemeContext = React.createContext();
const AppNew = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <button
          onClick={() => {
            setDarkTheme((prevTheme) => !prevTheme);
          }}
        >
          Change Theme
        </button>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </div>
  );
};

export default AppNew;
