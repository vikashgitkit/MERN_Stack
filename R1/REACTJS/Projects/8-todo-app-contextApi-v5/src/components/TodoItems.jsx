import { useContext } from "react";
import TodoItem from "./TododItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = ({ todoItems, onDeleteClick }) => {

  const todoItemsFromContext = useContext(TodoItemsContext)
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem
        key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
