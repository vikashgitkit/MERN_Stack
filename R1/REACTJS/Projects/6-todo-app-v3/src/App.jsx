import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "24/08/2025",
    },
    {
      name: "Go To College",
      dueDate: "24/08/2025",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems)
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>

    </center>
  );
}

export default App;
