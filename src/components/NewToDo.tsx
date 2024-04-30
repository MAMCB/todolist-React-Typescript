interface NewToDoProps {
  newToDo: string;
  textInput: React.RefObject<HTMLInputElement>,
  createNewToDo: (e: React.FormEvent<HTMLInputElement>) => void;
  handleNewToDo: () => void;
}


const NewToDo: React.FC<NewToDoProps > = (
    {newToDo,textInput, createNewToDo, handleNewToDo}
) => {
  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder={newToDo ? newToDo : "Enter a to do"}
        onChange={createNewToDo}
        ref={textInput}
      />
      <button onClick={handleNewToDo}>Add</button>
    </div>
  );
};

export default NewToDo;
