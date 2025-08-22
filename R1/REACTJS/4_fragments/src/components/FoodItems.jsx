import Item from "./Item";

const FoodItems = () => {

    let foodItems = ["Dal","Salad","Ghee","Milk", "Curd"]
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item foodItem = {item}/>
      ))}
    </ul>
  );
};

export default FoodItems;
