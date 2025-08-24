import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css"
import TodoItem from "./components/TododItem";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />

      <div className="item-container">
      <TodoItem todoDate="24/08/2025" todoName="Buy Milk"/>
      <TodoItem todoDate="25/08/2025" todoName="Go To College"/>
      
      </div>
    </center>
  );
}

export default App;
