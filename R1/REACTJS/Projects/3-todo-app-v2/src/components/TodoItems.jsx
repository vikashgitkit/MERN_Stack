import TodoItem from "./TododItem";
const TodoItems = ({ todoItems }) => {
  return(
  <div className="item-container">
  {todoItems.map((item) => (
    <TodoItem todoDate={item.dueDate} todoName={item.name} />
    ))}
  </div>
  );
};

export default TodoItems;
