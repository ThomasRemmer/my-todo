import {useState} from 'react'
import InputBox from "../InputBox/InputBox"
import {BsTrashFill} from "react-icons/bs"
import "./TodoCard.scss"

const TodoCard =  ({userInput, deleteTodo}) => {
const [complete, setComplete] = useState(false)


const handleComplete = () => {
  setComplete(!complete)
}

  const cardJSX = userInput.map((todo, index) => (
    <div className={complete ? 'todo-card todo-card__complete' : 'todo-card'} key={index}>
        <input type="checkbox" onChange={handleComplete} />
        <p key={todo.id}>{todo.text}</p>
        <BsTrashFill onClick={() => deleteTodo(todo.id)}/>

    </div>
  ))


  return (
    <div className='card-container'>{cardJSX}</div>
  )
    
}

export default TodoCard