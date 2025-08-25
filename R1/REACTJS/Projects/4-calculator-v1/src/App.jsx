import styles from './App.module.css'

function App() {
 
  return <div className={styles.calculator}>
    <input className={styles.display} type='text' />

    <div className={styles.buttonsContainer}>
      <button>C</button>
      <button>1</button>
      <button>2</button>
      <button>+</button>
    </div>
  </div>
}

export default App
