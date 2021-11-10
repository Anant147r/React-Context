import React, { useContext } from "react";
import { ThemeContext } from "../AppNew";
const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
        border: "1px solid black",
        height: "10rem",
        width: "10rem",
        padding: "2rem",
        margin: "2rem",
      }}
    >
      Function Component
    </div>
  );
};
export default FunctionContextComponent;
