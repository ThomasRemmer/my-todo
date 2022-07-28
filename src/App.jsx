import ResetButton from "./Components/ResetButton/ResetButton"
import './App.scss';
import InputBox from "./Components/InputBox/InputBox"
import CardContainer from "./Containers/CardContainer/CardContainer"
import { useState } from "react";

function App() {
  const [list, setList] = useState([])
  
  const addTodo = (input => {

    if(!input.text) {
      alert("please enter a todo")
    }
  })

  

  return (
    <div className="App">
      <nav>
        <h1>My Todos</h1>
        
      </nav>
      <main>
        <InputBox onSubmit={addTodo}/>
        <CardContainer />
        
      </main>
    </div>
  );
}

export default App;
