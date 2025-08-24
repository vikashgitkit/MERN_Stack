import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItem from "./components/TododItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "24/08/2025",
    },
    {
      name: "Go To College",
      dueDate: "24/08/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems/>

      <div className="item-container">
        <TodoItem todoDate="24/08/2025" todoName="Buy Milk" />
        <TodoItem todoDate="25/08/2025" todoName="Go To College" />
      </div>
    </center>
  );
}

export default App;
