import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer, useRef, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";


const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems
  if(action.type === 'NEW_ITEM'){
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate}
    ];

  } else if(action.type === 'DELETE_ITEM'){
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);

  }
  return newTodoItems
}
function App() {
  // const [todoItems, setTodoItems] = useState([]);
 
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
