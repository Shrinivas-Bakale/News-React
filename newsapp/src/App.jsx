import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const [cName, setcName] = useState("General");
  // const handleSendLink = (categoryName) => {
  //   // Use the categoryName to identify which button was clicked
  //   // console.log(` ${categoryName}`);
  //   setcName(categoryName);
  // };
  // console.log(cName)

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News pageSize={5} category="General" />}
          />
          <Route
            exact
            path="/Science"
            element={<News pageSize={5} category="Science" />}
          />
          <Route
            exact
            path="/Entertainment"
            element={<News pageSize={5} category="Entertainment" />}
          />
          <Route
            exact
            path="/Sports"
            element={<News pageSize={5} category="Sports" />}
          />
          <Route
            exact
            path="/Health"
            element={<News pageSize={5} category="Health" />}
          />
          <Route
            exact
            path="/Business"
            element={<News pageSize={5} category="Business" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
