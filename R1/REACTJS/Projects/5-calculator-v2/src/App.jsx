import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {

  let[calVal, setCalVal] = useState('')
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer />
    </div>
  );
}

export default App;
