import React from "react";
import "./App.css";
import About from "./components/About";

import NavBar from "./components/NavBar";
import Works from "./components/Works";
import SkillsAndInterests from "./components/SkillsAndInterests";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <SkillsAndInterests />
      <Works />
    </div>
  );
}

export default App;
