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
    
    
    const addTodo = (value) => {
        console.log(value)
        const completedItems = [...todos]
        completedItems.push(value) //Mutates original array
        console.log(completedItems)
        setToDos(completedItems)
    }

    const editTodo = (id) => {
      const editItem = todos.map(item => item.id !== id ? item : null)
      setToDos(editItem)
    }

    const deleteToDo = (id) => {
      const deletedItem = todos.filter((todo) => todo._id !== id)
      setToDos(deletedItem)
  }


  return (
    <>
      <ToDoForm  addToDo={addTodo}/>
      <ToDoList  todos={todos} completeToDo={completeToDo} deleteToDo={deleteToDo} editTodo={editTodo}/>
    </>
  );
}

export default App;

