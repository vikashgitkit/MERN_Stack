function App() {
  return (
    <center className="todo-container">
      <h1>TODO APP</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">Success</button>
          </div>
        </div>


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
