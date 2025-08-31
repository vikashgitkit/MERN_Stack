import { useRef, useState } from "react";
import styles from "./AddTodo.module.css";
import { CgAdd } from "react-icons/cg";


function AddTodo({ onNewItem }) {
 
  const todoNameEle = useRef();
  const dueDateEle = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameEle.current.value;
    const dueDate = dueDateEle.current.value; 

    todoNameEle.current.value = "";
    dueDateEle.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            className={styles.inputBox}
            ref={todoNameEle}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.inputBox}
            ref={dueDateEle}
            type="date"
            value={dueDate}
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
