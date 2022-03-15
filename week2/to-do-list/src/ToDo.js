const ToDo = ( {toDoItem, completeToDo, deleteToDo} ) => {
return (<div className="list-checkbox" key={toDoItem.id}>
        <input type="checkbox" onChange = { () => completeToDo(toDoItem.id) }/>{toDoItem.text}
        <button onClick={ () => deleteToDo(toDoItem.id)}>Delete</button>
        </div>
    )
}

export default ToDo;

