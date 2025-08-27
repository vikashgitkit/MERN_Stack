import styles from './Item.module.css'

//passing fn via props(handleBuyBtn)
const Item = ({foodItem, handleBuyBtn }) => {

  const handleBuyBtnClicked = (event) => {
    console.log("Event object is:", event);
    
        console.log(`${foodItem} being bought`)
  }
  return (
    <li className= {`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.btn} btn btn-info`}
      onClick={handleBuyBtn }
      >Buy</button>
    </li>
  );
};

export default Item