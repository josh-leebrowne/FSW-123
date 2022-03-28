import ToDo from "./ToDo"


const ToDoList = ({todos, completeToDo, deleteToDo}) => {

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