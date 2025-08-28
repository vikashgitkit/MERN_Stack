import { useState } from 'react';
import styles from './AddTodo.module.css'
function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  
  return (
    <div className="container">
    <div className="row kg-row">
      <div className="col-4">
        <input className={styles.inputBox} type="text" placeholder="Enter Todo Here" />
      </div>
      <div className="col-4">
        <input className={styles.inputBox} type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success kg-button" onClick={() => onNewItem('a', 'b')}>
          Add
        </button>
      </div>
    </div>
    </div>
  );
}

export default AddTodo
