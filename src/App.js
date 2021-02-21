import Navbar from "./Navbar";
import Home from "./Home";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Prompt from "./components/Prompt";

function App() {
  const [Goal, setGoal] = useState("");
  return (
    <div className="App">
      <Prompt Goal={Goal} setGoal={setGoal} />
      <div className="stylegoal">{Goal}</div>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
export default App;
