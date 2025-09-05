import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer, useRef, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";


const todoItemsReducer = (action) => {
  return [];
}
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodoItems, displayTodoItems] = useReducer()


  const addNewItem = (itemName, itemDueDate) => {

    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,  // old todos
         {name: itemName, dueDate: itemDueDate} //new todos
      ]
      return newTodoItems
    });
  };

  const deleteItem = (todoItemName) => {
    console.log(`Item Deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider value={{todoItems: todoItems,
    addNewItem: addNewItem,
    deleteItem: deleteItem}}>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <WelcomeMessage />
      <TodoItems />
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
