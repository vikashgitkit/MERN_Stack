import TodoItem from "./TododItem";
import styles from './TodoItems.module.css'
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return(
  <div className={styles.itemContainer}>
  {todoItems.map((item) => (
    <TodoItem todoDate={item.dueDate} todoName={item.name} />
    ))}
  </div>
  );
};

export default TodoItems;
