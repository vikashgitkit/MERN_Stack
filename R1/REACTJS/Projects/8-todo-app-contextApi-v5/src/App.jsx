import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useRef, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

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
    <TodoItemsContext.Provider value={todoItems}>
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage />
      <TodoItems onDeleteClick={handleDeleteItem} />
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
