import {useState} from "react";

const InputBox = () => {
    const [input, setInput] = useState("")
    

    const handleSubmit = event => {
        event.preventDefault();

        const task = event.target.value;

        if (!task) {
            alert("please enter a todo")
            return;
        }



    }

    return (
        <form className="todo-input-box" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add your task here..." value={input} className="todo-input-box-input"/>
            <button className="todo-input-box-button"></button>
        </form>

    )
}

export default InputBox