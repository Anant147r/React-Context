// import logo from './logo.svg';
import React from "react";
import "./App.css";
import AppNew from "./AppNew";
import UseRef from "./Refs/FunctionComponent/UseRef";
import SetInterval from "./Refs/SetInterval/SetInterval";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SetInterval />
      </div>
    );
  }
}

export default App;
