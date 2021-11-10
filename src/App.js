import './App.css';
import { useState } from 'react'

function App() {
  
  const [name, setName ] = useState('forrest')  // array destrucure to a variable(name) and function(setName)
  
  const hClick = () => {
    setName('stormy')   // use the function 'setName' created above to change the value of 'name'
    console.log(name)
  }

  return (
    <div className="App">
      <h1>Super pooper name is: {name}</h1>
      <button onClick={hClick}>Change name</button>
    </div>
  );
}

export default App;
