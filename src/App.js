// import logo from './logo.svg';
import React from "react";
import "./App.css";
import AppNew from "./AppNew";
import UseRef from "./Refs/FunctionComponent/UseRef";
import SetInterval from "./Refs/SetInterval/SetInterval";
import CreateRef from "./Refs/CreateRef/CreateRef";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CreateRef />
      </div>
    );
  }
}

export default App;
