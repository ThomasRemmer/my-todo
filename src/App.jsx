import ResetButton from "./Components/ResetButton/ResetButton"
import './App.scss';
import InputBox from "./Components/InputBox/InputBox"
import TodoCard from "./Components/TodoCard/TodoCard";
import { useState } from "react";

const  App = () => {
  const [list, setList] = useState([])
  const [noItems, setNoItems] = useState(true)
  
  const addTodo = (input) => {
    if(input.text === "") {
      alert("please enter a todo")
      return;
    }
    const newTodo = [input, ...list]
    setList(newTodo)
    setNoItems(false)
  }

  const deleteTodo = (id) => {
    const delArr = [...list].filter(todo => todo.id !== id)
    setList(delArr)
    if (list.length === 1) {
      setNoItems(true)
    }
  }

  const completeTodo = (id) => {
    let updatedTodos = list.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setList(updatedTodos);
  };

  const handleReset = () => {
    setList([])
    setNoItems(true)
  }

  

  return (
    <div className="App">
      <nav>
        <h1>My Todos</h1>
        <ResetButton reset={handleReset}/>
        
      </nav>
      <main>
        <InputBox onSubmit={addTodo}/>
        <>{noItems && <p>Nothing to see yet... Add a task in the field above!</p>}</>
        <TodoCard userInput={list} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
        
      </main>
    </div>
  );
}

export default App;
