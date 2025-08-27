import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {

  let[calVal, setCalVal] = useState('')

  const onBtnClick = (buttonText)=>{
     if(buttonText === 'C'){

  } else if(buttonText === '='){

  } else{
    const newDisplayVal = calVal + buttonText
  }
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer onButtonClick={onBtnClick}/>
    </div>
  );
}

export default App;
