interface NewToDoProps {
    newToDo: string,
  createNewToDo: (e: React.FormEvent<HTMLInputElement>) => void,
  handleNewToDo: () => void}


const NewToDo: React.FC<NewToDoProps > = (
    {newToDo, createNewToDo, handleNewToDo}
) => {
  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder={newToDo ? newToDo : "Enter a to do"}
        onChange={createNewToDo}
        onClick={(e: React.FormEvent<HTMLInputElement>) =>
          (e.currentTarget.value = "")
        }
      />
      <button onClick={handleNewToDo}>Add</button>
    </div>
  );
};

export default NewToDo;
