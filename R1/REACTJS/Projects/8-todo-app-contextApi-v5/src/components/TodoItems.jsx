import { useContext } from "react";
import TodoItem from "./TododItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {

  const contextObj = useContext(TodoItemsContext)
  const todoItems = contextObj.todoItems
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem
        key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        />
      ))}
    </div>
  );
};

export default TodoItems;
