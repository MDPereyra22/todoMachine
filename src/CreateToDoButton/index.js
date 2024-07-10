import { useContext } from "react";
import "./CreateToDoButton.css";
import { TodoContext } from "../TodoContext";

const CreateToDoButton = () => {
  const {handleOpenModal} = useContext(TodoContext)
  return (
    <button
      className="CreateToDoButton"
      onClick={() => handleOpenModal()}
    >
      +
    </button>
  );
};

export { CreateToDoButton };
