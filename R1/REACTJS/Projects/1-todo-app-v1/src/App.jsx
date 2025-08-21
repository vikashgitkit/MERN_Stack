import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TododItem1";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />
      <TodoItem1 />

      <div class="row">
        <div class="col-4">Go To College</div>
        <div class="col-4">26/08/2025</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </center>
  );
}

export default App;
