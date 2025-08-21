import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TododItem1";
import TodoItem2 from "./components/TododItem2";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </center>
  );
}

export default App;
