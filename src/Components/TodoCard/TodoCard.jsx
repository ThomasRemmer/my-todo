import {useState} from 'react'
import InputBox from "../InputBox/InputBox"
import {BsTrashFill} from "react-icons/bs"
import "./TodoCard.scss"

const TodoCard =  ({userInput, complete}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const cardJSX = userInput.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-card todo-card__complete' : 'todo-card'} key={index}>
        <input type="checkbox" name="" id="" />
        <p key={todo.id}>{todo.text}</p>
        <BsTrashFill />

    </div>
  ))


  return (
    <div className='card-container'>{cardJSX}</div>
  )
    
}

export default TodoCard