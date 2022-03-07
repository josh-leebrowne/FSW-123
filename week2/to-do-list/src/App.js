import './App.css';
import ToDoList from './ToDo';
import Card from './Card';
import { toDoStore } from './Store';

const App = () => {

  return (
    <>
      <ToDoList store={toDoStore}/>
      <div className="wrapper">
        <div className="cardOne" style={{background:'red', width:150, height:150}}><Card title="Title 1" subtitle="Subtitle 1" descr="Test Description"/></div>
        <div className="cardTwo" style={{background:'orange', width:150, height:150}}><Card title="Title 2" subtitle="Subtitle 2" descr="Test Description"/></div>
        <div className="cardThree" style={{background:'yellow', width:150, height:150}}><Card title="Title 3" subtitle="Subtitle 3" descr="Test Description"/></div>
        <div className="cardFour" style={{background:'green', width:150, height:150}}><Card title="Title 4" subtitle="Subtitle 4" descr="Test Description"/></div>
      </div>
    </>
  );
}

export default App;

