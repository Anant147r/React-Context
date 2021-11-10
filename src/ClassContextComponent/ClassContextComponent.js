import React from "react";
import { ThemeContext } from "../AppNew";
export default class ClassContextComponent extends React.Component {
  themeStyle = (darkTheme) => {
    return {
      backgroundColor: darkTheme ? "black" : "white",
      color: darkTheme ? "white" : "black",
      padding: "2rem",
      margin: "2rem",
      height: "10rem",
      width: "10rem",
      border: "1px solid black",
    };
  };
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyle(darkTheme)}>Class Component</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
