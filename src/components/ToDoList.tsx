import { useState } from "react"

interface toDos {
    id: number,
    text: string,
    isCompleted: boolean
    
}

const ToDoList = () => {
    const [toDos, setToDos] = useState<toDos[]>([])
    const [newToDo, setNewToDo] = useState<string>("")

    const handleNewToDo = () => {
        const toDo: toDos = {
            id: toDos.length + 1,
            text: newToDo,
            isCompleted: false
        }
        setToDos([...toDos, toDo])
        setNewToDo("")
    }

    const createNewToDo = (e: React.FormEvent<HTMLInputElement>) => {
      setNewToDo(e.currentTarget.value);
    };

    const handleComplete = (id: number) => {
        const updatedToDos = toDos.map((toDo) => {
            if(toDo.id === id) {
                return {
                    ...toDo,
                    isCompleted: !toDo.isCompleted
                }
            }
            return toDo
        })
        setToDos(updatedToDos)
    }

  return (
    <div>
        <h1>ToDo List</h1>
        <input type="text" placeholder={newToDo?newToDo:"Enter a to do"}onChange={createNewToDo} onClick={(e:React.FormEvent<HTMLInputElement>)=>e.currentTarget.value = ""} />
        <button onClick={handleNewToDo}>Add</button>
       
    <ul>
        {toDos.map((toDo) => (
            <li key={toDo.id} className={toDo.isCompleted?"complete":"incomplete"}>{toDo.text}
            <input type="checkbox" onClick={()=>handleComplete(toDo.id)} /></li>
        ))}
    </ul>
    </div>
  )
}

export default ToDoList;