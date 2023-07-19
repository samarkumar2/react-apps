import React, { useState } from "react";
import WorkFlow from "./password-generator/WorkFlow";
import "./App.css";
const App = () => {
  return (
    <div className="container main-container">
      <h3 className="text-center">Password Generator</h3>
      <WorkFlow />
    </div>
  );
};

export default App;
