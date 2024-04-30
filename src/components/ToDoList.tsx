import { toDos } from "../utils/interfaces";

interface ToDoListProps {
    toDos:toDos[],
    handleComplete:(id:number)=>void
}

const ToDoList:React.FC<ToDoListProps> = ({toDos,handleComplete}) => {
   
  return (
    
        
       
    <ul>
        {toDos.map((toDo) => (
            <li key={toDo.id} className={toDo.isCompleted?"complete":"incomplete"}>{toDo.text}
            <input type="checkbox" onClick={()=>handleComplete(toDo.id)} /></li>
        ))}
    </ul>
    
  )
}

export default ToDoList;