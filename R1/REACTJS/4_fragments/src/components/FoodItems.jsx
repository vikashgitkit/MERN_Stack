import Item from "./Item";

const FoodItems = ({items}) => {
    console.log("aaa--",items)
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key = {item} foodItem = {item} handleBuyBtn={()=> console.log(`${item} being bought`)}/>
      ))}
    </ul>
  );
};

export default FoodItems;
