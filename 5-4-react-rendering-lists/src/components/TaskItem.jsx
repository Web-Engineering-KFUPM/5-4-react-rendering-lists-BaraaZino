import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task" key={task.id}>
      <label className="taskMain">
      
      </label>
      {!task.isDone && <DueBadge dueDate={task.dueDate} />}
     
      <button className="ghost" aria-label="Delete task">
        
      </button>
    </li>
  );
}
