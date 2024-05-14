import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <News pageSize={5} />
      </>
    );
  }
}
