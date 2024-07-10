import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultToDo = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso", completed: false },
//   { text: "Caminar", completed: false },
//   { text: "Correr", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDo))

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
