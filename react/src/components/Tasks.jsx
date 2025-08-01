import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  const navigate = useNavigate();

  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${task.isCompleted ? "line-through" : ""}`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => deleteTask(task.id)}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;