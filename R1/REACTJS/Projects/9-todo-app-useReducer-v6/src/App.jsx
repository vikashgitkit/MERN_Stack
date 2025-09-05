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

  }
  return newTodoItems
}
function App() {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, displayTodoItems] = useReducer(todoItemsReducer, [])


  const addNewItem = (itemName, itemDueDate) => {

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    }
    displayTodoItems(newItemAction)
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
