import ToDoList from './components/ToDoList'
import NewToDo from './components/NewToDo'
import { useState } from "react";
import { toDos } from "./utils/interfaces";
import './App.css'

function App() {
   const [toDos, setToDos] = useState<toDos[]>([]);
   const [newToDo, setNewToDo] = useState<string>("");

   const handleComplete = (id: number) => {
     const updatedToDos = toDos.map((toDo) => {
       if (toDo.id === id) {
         return {
           ...toDo,
           isCompleted: !toDo.isCompleted,
         };
       }
       return toDo;
     });
     setToDos(updatedToDos);
   };

    const handleNewToDo = () => {
      const toDo: toDos = {
        id: toDos.length + 1,
        text: newToDo,
        isCompleted: false,
      };
      setToDos([...toDos, toDo]);
      setNewToDo("");
    };

    const createNewToDo = (e: React.FormEvent<HTMLInputElement>) => {
      setNewToDo(e.currentTarget.value);
    };


  return (
    <>
    <NewToDo newToDo={newToDo} createNewToDo={createNewToDo} handleNewToDo = {handleNewToDo} />
     <ToDoList toDos={toDos} handleComplete={handleComplete} />
    </>
  )
}

export default App
