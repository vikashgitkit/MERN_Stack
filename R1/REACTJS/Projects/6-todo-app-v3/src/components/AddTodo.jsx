import { useRef, useState } from "react";
import styles from "./AddTodo.module.css";
import { CgAdd } from "react-icons/cg";


function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const noOfUpdates = useRef(0)

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`noOfUpdates are: ${noOfUpdates.current}`);
    
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.inputBox}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            
            className="btn btn-success kg-button"
          >
            <CgAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
