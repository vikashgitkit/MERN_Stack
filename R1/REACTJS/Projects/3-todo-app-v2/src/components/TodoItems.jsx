import TodoItem from "./TododItem";
const TodoItems = ({ todoItems }) => {
  return(
  <div className="item-container">
    <TodoItem todoDate={todoItems} todoName={todoItems.name} />
    <TodoItem todoDate={todoItems} todoName={todoItems.name} />
  </div>
  );
};

export default TodoItems;
