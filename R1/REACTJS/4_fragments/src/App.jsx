import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Dal","Salad","Ghee","Milk", "Curd"]

  const handleOnChange = (event) => {
        console.log(event.target.value)
    }
  // let foodItems = []

  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }

  // let emptyMsg = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;
  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} */}
      {/* {emptyMsg} */}

     <ErrorMessage items = {foodItems}/>
     <FoodInput handleOnChange = {handleOnChange}/>
     <FoodItems items = {foodItems}/>
    </Container>

    <Container>
      <p>Above is the list of healthy foods that are good for your health and well being</p>
    </Container>
    </>
  );
}

export default App;
