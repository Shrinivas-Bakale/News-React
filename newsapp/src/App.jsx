import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [cName, setcName] = useState("General");
  const handleSendLink = (categoryName) => {
    // Use the categoryName to identify which button was clicked
    // console.log(` ${categoryName}`);
    setcName(categoryName);
  };
  // console.log(cName)

  return (
    <>
      <Router>
        <NavBar handleSendLink={handleSendLink} />
        <Switch>
          <Route exact path="/">
            <News pageSize={5} category={cName} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
