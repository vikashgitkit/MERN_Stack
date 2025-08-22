import styles from './Item.module.css'

const Item = ({foodItem}) => {
  return (
    <li className= {`${styles["kg-item"]} list-group-item`}>
      <span className="kg-span">{foodItem}</span>
    </li>
  );
};

export default Item