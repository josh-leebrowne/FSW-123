import { useState } from "react"

const ToDoForm = ( { addToDo, text } ) => {
    const initInputs = {text: text || ''}
    const [data, setData] = useState(initInputs)

    const handleChange = (e) => {
        const {text, value} = e.target
        setData(prevData=>({...prevData, [text]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(data)
        setData(initInputs)
    }

    return(
        <form onSubmit={handleSubmit} className="formDiv">
            <input 
            type="text" 
            onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}

export default ToDoForm;