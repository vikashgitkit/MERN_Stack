import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {

  let[calVal, setCalVal] = useState('')

  const onBtnClick = (buttonText)=>{
     if(buttonText === 'C'){
      setCalVal("")

  } else if(buttonText === '='){
    const result = eval(calVal)
    setCalVal(result)

  } else{
    const newDisplayVal = calVal + buttonText
    setCalVal(newDisplayVal)
  }
}
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer onButtonClick={onBtnClick}/>
    </div>
  );
}

export default App;
