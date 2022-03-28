import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';
import { toDoStore } from './Store';
import ToDoForm from './ToDoForm';

const App = () => {
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

    const addTodo = (id) => {
        const completedItems = [...todos]
        const newItem = completedItems.push((todo) => todo.id === id)
        setToDos(newItem)
    }

    const toDoForm = todos.map(todo => 
      <ToDoForm 
      {...todo}
      key={todo.text}
      addToDo={addTodo}/>)
  return (
    <>
      <ToDoList  todos={todos} completeToDo={completeToDo} deleteToDo={deleteToDo} key={todos.name}/>
      {toDoForm}
    </>
  );
}

export default App;

