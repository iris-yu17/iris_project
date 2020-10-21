import React from "react";
import MyNavbar from "./components/commons/MyNavbar";
import MainContent from "./components/pages/MainContent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <MyNavbar />
          <MainContent />
        </>
      </Router>
    </div>
  );
}

export default App;
