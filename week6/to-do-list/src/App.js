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

    const addTodo = (value) => {
        console.log(value)
        const completedItems = [...todos]
        completedItems.push(value) //Mutates original array
        console.log(completedItems)
        setToDos(completedItems)
    }



  return (
    <>
      <ToDoForm  addToDo={addTodo}/>
      <ToDoList  todos={todos} completeToDo={completeToDo} deleteToDo={deleteToDo}/>
    </>
  );
}

export default App;

