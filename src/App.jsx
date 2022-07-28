import ResetButton from "./Components/ResetButton/ResetButton"
import './App.scss';
import InputBox from "./Components/InputBox/InputBox"
import TodoCard from "./Components/TodoCard/TodoCard";
import { useState } from "react";

const  App = () => {
  const [list, setList] = useState([])
  const [noItems, setNoItems] = useState(true)
  
  const addTodo = (input => {

    if(input.text === "") {
      alert("please enter a todo")
      return;
    }

    const newTodo = [input, ...list]

    setList(newTodo)

    setNoItems(false)
  })

  const deleteTodo = (id) => {
    const delArr = [...list].filter(todo => todo.id !== id)
    setList(delArr)
    if (list.length === 1) {
      setNoItems(true)
    }
  }

  

  return (
    <div className="App">
      <nav>
        <h1>My Todos</h1>
        
      </nav>
      <main>
        <InputBox onSubmit={addTodo}/>
        <>{noItems && <p>Nothing to see yet... Add a task in the field above!</p>}</>
        <TodoCard userInput={list} deleteTodo={deleteTodo}/>
        
      </main>
    </div>
  );
}

export default App;
