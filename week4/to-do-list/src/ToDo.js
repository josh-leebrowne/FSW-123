import { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDo = ( {toDoItem, completeToDo, deleteToDo, editTodo, text} ) => {
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="list-checkbox" key={toDoItem.id}>
            <input type="checkbox" onChange = { () => completeToDo(toDoItem.id) }/>{toDoItem.text}
            { !editToggle ?
                <>
                    <button onClick={ () => deleteToDo(toDoItem._id)}>Delete</button>
                    <button onClick={ () => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
                :
                <>
                    <ToDoForm
                    text={text}
                    addToDo={completeToDo}
                    />
                    <button onClick={ () => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        
        </div>
    )
}

export default ToDo;

