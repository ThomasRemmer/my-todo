import {useState} from 'react'
import InputBox from "../InputBox/InputBox"

const TodoCard =  ({userInput}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const cardJSX = userInput.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <p key={todo.id}>{todo.text}</p>
    </div>
  ))


  return (
    <div className='card-container'>{cardJSX}</div>
  )
    
}

export default TodoCard