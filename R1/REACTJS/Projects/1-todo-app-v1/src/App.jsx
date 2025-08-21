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
            <button>Add</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
