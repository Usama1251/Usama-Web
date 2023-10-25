import React, {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textarea from './components/Textarea';



function App() {
const [alert, setAlert] = useState(null)
const [mode, setMode] = useState({label: "Enable Dark Mode", color: "dark", backgroundColor: "light"})



const toggleAlert = (message) =>
{

setAlert({msg:message})
setTimeout(() => {
  setAlert(null)
}, 3000);


}

const toggleMode = () =>
{
  setMode({label: "Enable light Mode", color: "light", backgroundColor: "dark"})
  document.body.style.backgroundColor = "black"
  toggleAlert("Dark mode has been enabled")

  if(mode.color === "light")
  {
    setMode({label: "Enable Dark Mode", color: "dark", backgroundColor: "light"})
    document.body.style.backgroundColor = "white"
    toggleAlert("Light mode has been enabled")

  }
}

  return (
    <>
    <div className="container">
        <h1>Welcome to Usama Web</h1>
      </div>
    
      <Alert alert={alert} mode={mode}/>

      
        
        <Textarea text1= {"Convert to Uppercase | LowerCase | Copy | Speak | Remove Spaces"}  toggleAlert = {toggleAlert} mode = {mode}/>
        
      
   
    </>
  );
}

export default App;
