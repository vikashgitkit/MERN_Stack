import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = ["Dal","Salad","Ghee","Milk", "Curd"]

  let foodItems = []
  return (
    <>
      <h1>Healthy Foods</h1>
      {foodItems.length === 0 ? <h3>I am still hungry</h3> : null}
      <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
      </ul>
    </>
  );
}

export default App;
