import { useContext } from "react";
import { CreateToDoButton } from "../CreateToDoButton";
import EmptyTodos from "../EmptyTodos";
import { ToDoCouter } from "../ToDoCounter";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";
import TodosError from "../TodosError";
import TodosLoading from "../TodosLoading";
import { TodoContext } from "../TodoContext";
import Modal from "../Modal";
import TodoForm from "../TodoForm/Index";

function AppUI() {
  const { searchedTodos, completeTodo, deleteTodo, loading, error, openModal } =
    useContext(TodoContext);
  return (
    <>
      <ToDoCouter />
      <ToDoSearch />
      <ToDoList>
        {loading ? (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        ) : error ? (
          <TodosError />
        ) : searchedTodos.length === 0 ? (
          <EmptyTodos />
        ) : (
          searchedTodos.map((toDo) => (
            <ToDoItem
              key={toDo.text}
              text={toDo.text}
              completed={toDo.completed}
              completeTodo={() => completeTodo(toDo.text)}
              deleteTodo={() => deleteTodo(toDo.text)}
            />
          ))
        )}
      </ToDoList>

      <CreateToDoButton />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
