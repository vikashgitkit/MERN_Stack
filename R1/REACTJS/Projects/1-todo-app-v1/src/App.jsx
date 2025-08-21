import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

function App() {
  return (
    <center className="todo-container">
    <AppName />

      <div class="container text-center">
        <AddTodo/>


        <div class="row">
          <div class="col-4">
            Buy Milk
          </div>
          <div class="col-4">
            21/08/2025
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>



        <div class="row">
          <div class="col-4">
            Go To College
          </div>
          <div class="col-4">
            26/08/2025
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
