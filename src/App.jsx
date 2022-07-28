import ResetButton from "./Components/ResetButton/ResetButton"
import './App.scss';
import InputBox from "./Components/InputBox/InputBox"
import CardContainer from "./Containers/CardContainer/CardContainer"
import { useState } from "react";

function App() {

  

  

  return (
    <div className="App">
      <nav>
        <h1>My Todos</h1>
        
      </nav>
      <main>
        <InputBox />
        
      </main>
    </div>
  );
}

export default App;
