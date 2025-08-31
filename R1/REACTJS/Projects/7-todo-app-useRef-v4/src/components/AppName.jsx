import styles from './AppName.module.css'
function AppName() {
  // return <h1 className={styles['todoHeading']}>TODO APP</h1>;

  //OR another way to apply css module
  return  <h1 className={styles.todoHeading}>TODO APP</h1>
}

export default AppName;
