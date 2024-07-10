import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [serchValue, setSerchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos[index].completed = true;
    saveTodos(newTodos);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handelCreateTodo = (text) => {
    const newTodo = { text: text, completed: false };
    saveTodos([...todos, newTodo]);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const newTodoFilter = newTodos.filter((todo) => todo.text !== text);
    saveTodos(newTodoFilter);
  };
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(serchValue.toLocaleLowerCase())
  );
  return (
    <TodoContext.Provider
      value={{
        handleOpenModal,
        completedTodos,
        totalTodos,
        serchValue,
        setSerchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        saveTodos,
        todos,
        handelCreateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
