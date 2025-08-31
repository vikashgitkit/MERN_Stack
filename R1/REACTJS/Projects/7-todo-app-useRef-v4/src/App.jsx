import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useRef, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);


  const handleNewItem = (itemName, itemDueDate) => {

    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,  // old todos
         {name: itemName, dueDate: itemDueDate} //new todos
      ]
      return newTodoItems
    });
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(`Item Deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}{" "}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
