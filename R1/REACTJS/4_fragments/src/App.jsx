import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Dal","Salad","Ghee","Milk", "Curd"]
  // let foodItems = []

  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }

  // let emptyMsg = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;
  return (
    <>
      <h1>Healthy Foods</h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} */}
      {/* {emptyMsg} */}

     <ErrorMessage/>
     <FoodItems/>
    </>
  );
}

export default App;
