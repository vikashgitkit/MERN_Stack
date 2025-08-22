import Item from "./Item";

const FoodItems = ({items}) => {
    console.log("aaa--",items)
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key = {item} foodItem = {item}/>
      ))}
    </ul>
  );
};

export default FoodItems;
