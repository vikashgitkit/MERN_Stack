import { Exports } from "./Export"; //if componenet is not default export then we need to import comp inside {}
import KgButton from "./KgButton";
import { DynamicComp } from "./DynamicComp";
import { Random } from "./Random";

function App() {
  return <div>
    <h1>Hello component</h1>
    <KgButton></KgButton>
    <Exports></Exports>
    <DynamicComp/>
    <Random/>
    <Random/>
    <Random/>
    <Random/>
    <Random/>

  </div>
}

export default App;

//website where we can see how jsx is converted into js: https://babeljs.io/repl