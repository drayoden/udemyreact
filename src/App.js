import './App.css';
import { useState } from 'react'

function App() {
  
  const [name, setName ] = useState('forrest')  // array destrucure to a variable(name) and function(setName)
  
  // cycle through the events and display each one with proper formatting...
  const [events, setEvents] = useState([
    {title: "stormy's birthday bash",id: 1},
    {title: "forrest's big 5",id: 2},
    {title: "the boys get catnip",id: 3}
  ])


  const hClick = () => {
    setName('stormy')   // use the function 'setName' created above to change the value of 'name'
    console.log(name)
  }

  return (
    <div className="App">
      <h1>Super pooper name is: {name}</h1>
      <button onClick={hClick}>Change name</button>

      {/* map method has 'index' as well... cannot be used as a key, just a counter */}
      {events.map( (event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ) )}
    </div>
  );
}

export default App;
