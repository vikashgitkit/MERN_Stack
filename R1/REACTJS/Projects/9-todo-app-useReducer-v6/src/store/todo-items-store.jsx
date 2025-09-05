import { createContext } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
})


const TodoItemsContextProvider = () => {
     const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])


  const addNewItem = (itemName, itemDueDate) => {

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    }
    dispatchTodoItems(newItemAction)
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction)
  };
}

export default TodoItemsContextProvider