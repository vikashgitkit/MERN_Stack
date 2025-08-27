import styles from './Item.module.css'

//passing fn via props(handleBuyBtn)
const Item = ({foodItem, bought, handleBuyBtn }) => {

  return (
    <li className= {`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.btn} btn btn-info`}
      onClick={handleBuyBtn }
      >Buy</button>
    </li>
  );
};

export default Item