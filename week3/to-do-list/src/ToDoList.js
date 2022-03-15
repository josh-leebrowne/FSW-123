import { useState } from 'react';
import ToDo from "./ToDo"
import { toDoStore } from './Store';

const ToDoList = () => {
    const [todos, setToDos] = useState(toDoStore)

    const completeToDo = (id) => {
        const completedItems = [...todos]
        const index = completedItems.findIndex(todo => todo.id === id)
        completedItems[index].isComplete = !completedItems[index].isComplete
        setToDos(completedItems)
    }
    
    const deleteToDo = (id) => {
        const deletedItem = todos.filter((todo) => todo.id !== id)
        setToDos(deletedItem)
    }

    console.log(todos)
    const data = todos
    const dataMap = data.length && data.map((toDoItem) => <ToDo toDoItem={toDoItem} completeToDo={completeToDo} deleteToDo={deleteToDo}/> )
    return(
        <div className="to-do-list">
            {dataMap}
        </div>      
    )
}
    
export default ToDoList;