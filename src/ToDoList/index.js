import './ToDoList.css'

const ToDoList = ({ children }) => {
  return <ul className="TodoList">{children}</ul>;
};

export { ToDoList };
