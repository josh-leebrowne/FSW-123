import ToDo from "./ToDo"


const ToDoList = ({todos, completeToDo, deleteToDo, editTodo}) => {
    
    const data = todos
    const dataMap = data.length && data.map((toDoItem) => <ToDo key={toDoItem._id} toDoItem={toDoItem} completeToDo={completeToDo} deleteToDo={deleteToDo} editTodo={editTodo}/> )

    return(
        <div className="to-do-list">
            {dataMap}
        </div>      
    )
}
    
export default ToDoList;