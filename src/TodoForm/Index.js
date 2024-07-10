import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { setOpenModal, handelCreateTodo } = useContext(TodoContext);

  const handleCancel = (event) => {
    event.preventDefault();
    handelCreateTodo(newTodoValue)
    setOpenModal(false);
  };
  const onSubmit = () =>{
    handelCreateTodo(newTodoValue)
    setOpenModal(false);
  }

  const handleChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        required
        onChange={handleChange}
        value={newTodoValue}
        placeholder="cortar cebolla..."
      />

      <div className="TodoForm-buttonContainer">
        <button
          onClick={handleCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          {" "}
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {" "}
          Añadir Tarea
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
