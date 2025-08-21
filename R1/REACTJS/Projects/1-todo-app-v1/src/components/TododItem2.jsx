function TodoItem2() {

    let todoName = "Go To College";
    let todoDate = "21/08/2025"
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2
