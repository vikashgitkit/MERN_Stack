import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AppName from './components/AppName'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'

function App() {

  return <center>
  <AppName/>
  <ClockSlogan/>
  <CurrentTime/>
  </center>
}

export default App
