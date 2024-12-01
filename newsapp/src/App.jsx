import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  // const apikey = process.env.REACT_APP_API_KEY;
  const apikey = "f0f20faac89a4cb39ddbebe92a2f2336";
  // const [cName, setcName] = useState("General");
  // const handleSendLink = (categoryName) => {
  //   // Use the categoryName to identify which button was clicked
  //   // console.log(` ${categoryName}`);
  //   setcName(categoryName);
  // };
  // console.log(cName)
  const [progress, setProgress] = useState(0);

  // setProgress()
  const setProgressBar = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} height={4} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apikey={apikey}
                setProgressBar={setProgressBar}
                pageSize={5}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                apikey={apikey}
                setProgressBar={setProgressBar}
                pageSize={5}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                apikey={apikey}
                setProgressBar={setProgressBar}
                pageSize={5}
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                apikey={apikey}
                setProgressBar={setProgressBar}
                pageSize={5}
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                apikey={apikey}
                setProgressBar={setProgressBar}
                pageSize={5}
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                apikey={apikey}
                setProgressBar={setProgressBar}
                pageSize={5}
                category="business"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
