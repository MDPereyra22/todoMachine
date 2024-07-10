import { useContext } from "react";
import "./ToDoCounter.css";
import { TodoContext } from "../TodoContext";

const ToDoCouter = () => {

  const { completedTodos, totalTodos } = useContext(TodoContext)
  const noTodos = completedTodos === totalTodos;

  return (
    <h1 className="TodoCounter">
      {noTodos ? (
        "Felicitaciones, no tienes tareas pendientes"
      ) : (
        <>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </>
      )}
    </h1>
  );
};
 
export { ToDoCouter };
