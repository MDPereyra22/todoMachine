import { CompleteIcon } from "../CompleteIcon";
import { DeleteIcon } from "../DeleteIcon";
import "./ToDoItem.css";

const ToDoItem = ({ text, completed, completeTodo, deleteTodo }) => {
  return (
    <li className="TodoItem">
      <div className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        <CompleteIcon
          className={`check ${completed && "completed"}`}
          onClick={completeTodo}
        />
      </div>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete  "}`}>
        {text}
      </p>
      <div className="Icon Icon-delete">
        <DeleteIcon className="closer" onClick={deleteTodo} />
      </div>
    </li>
  );
};

export { ToDoItem };
