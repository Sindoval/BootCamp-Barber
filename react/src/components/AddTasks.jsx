import { useState } from "react";
import Input from "./Input";


function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('');
  const [desciption, setDesciption] = useState('');

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={desciption}
        onChange={(event) => setDesciption(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          if (!title.trim() || !desciption.trim()) {
            return alert("Preencha o titulo e a descrição da tarefa")
          }
          onAddTaskSubmit(title, desciption);
          setTitle("");
          setDesciption("");
        }}
      >Adicionar</button>
    </div>
  );
}

export default AddTasks;