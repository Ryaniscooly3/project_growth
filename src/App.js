import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
  );
}

export default App;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Prompt from './components/Prompt'

function App() {
    const [whatGoal, setGoal] = useState("");
    return ( <div>
        {/*  pass setter function down  */}
        <Prompt whatGoal={whatGoal} setGoal={setGoal} />
        {/* display goal */}
        <p>{whatGoal}</p>
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'))