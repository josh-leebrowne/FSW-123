import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const ToDoForm = ( { addToDo, text } ) => {
    const initInputs = {text: text || '', _id: uuidv4() , isComplete:false}
    const [data, setData] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name)
        setData(prevData=>({...prevData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(data)
        setData(initInputs)
    }

    return(
        <form onSubmit={handleSubmit} className="formDiv">
            <input
            name="text"
            type="text" 
            onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}

export default ToDoForm;