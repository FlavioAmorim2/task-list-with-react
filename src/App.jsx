/*

// import { useState } from 'react'
import ItemsContainer from "./ItemsContainer";
import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(["lavar roupa", " ir ao mercado"]);

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  };

  return (
    <div>
      <h1>Minha lista de tarefas</h1>
      <h2></h2>
      <ItemsContainer taskList={[taskList]} removeFromList={removeFromList} />;
    </div>
  )
}

export default App
*/

import ItemsContainer from './ItemsContainer'; 
import { useState } from 'react';
import AddItemsContainer from './AddItemsContainer';
import './App.css';


function App() {
  const [taskList, setTaskList] = useState(['lavar roupa', 'ir ao mercado']);

  const removeFromList = (item) => {
    const newList = taskList.filter(task => task !== item);
    setTaskList(newList); 
  }

  const addToList = (item) => {
  //   const newList = [...taskList];
  //   newList.push(item);
  //   setTaskList(newList);

  setTaskList([...taskList, item]);
  
  };
  
  return (
    <div>
      <h1>Minha lista de tarefas</h1>
      <AddItemsContainer addToList={addToList}/>
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
