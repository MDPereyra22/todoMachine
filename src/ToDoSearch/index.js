import { useContext } from "react";
import "./ToDoSearch.css";
import { TodoContext } from "../TodoContext";

const ToDoSearch = () => {
  const {serchValue, setSerchValue} = useContext(TodoContext)
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={serchValue}
      onChange={(event) => setSerchValue(event.target.value)}
    />
  );
};

export { ToDoSearch };
  