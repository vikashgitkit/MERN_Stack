import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal","Salad","Ghee","Milk", "Curd"]
  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
      </ul>
    </>
  );
}

export default App;
