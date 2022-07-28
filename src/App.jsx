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
    setList([input, ...list])
    setNoItems(false)
  }

  const handleReset = () => {
    setList([])
    setNoItems(true)
  }

  const deleteTodo = (id) => {
    setList([...list].filter(todo => todo.id !== id))
    if (list.length === 1) {
      setNoItems(true)
    }
  }

  const checkBoxTicked = (id) => {
    const updatedTodos = list.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setList(updatedTodos);
  };

  return (
    <div className="App">
      <nav>
        <h1>My Todos</h1>
        <ResetButton reset={handleReset}/>
      </nav>
      <main>
        <InputBox onSubmit={addTodo}/>
        <>{noItems && <p>Nothing to see yet... Add a task in the field above!</p>}</>
        <TodoCard userInput={list} deleteTodo={deleteTodo} completeTodo={checkBoxTicked}/>
        
      </main>
    </div>
  );
}

export default App;
