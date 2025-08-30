import { RiDeleteBin5Line } from "react-icons/ri";


function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
      <form action="">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <RiDeleteBin5Line />
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default TodoItem;
