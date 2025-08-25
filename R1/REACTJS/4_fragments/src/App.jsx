import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"
import Container from "./components/Container";

function App() {
  let foodItems = ["Dal","Salad","Ghee","Milk", "Curd"]
  // let foodItems = []

  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }

  // let emptyMsg = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;
  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} */}
      {/* {emptyMsg} */}

     <ErrorMessage items = {foodItems}/>
     <FoodItems items = {foodItems}/>
    </Container>
  );
}

export default App;
