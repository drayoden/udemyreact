import './App.css';
import { useState } from 'react'

function App() {
  
  // cycle through the events and display each one with proper formatting...
  const [events, setEvents] = useState([
    {title: "stormy's birthday bash",id: 1},
    {title: "forrest's big 5",id: 2},
    {title: "the boys get catnip",id: 3}
  ])


  const hClick = (id) => {
    
    {/* the clicked event with the matching id will return false, thus not returned */}
    {/* when the state depends on the previous state place in an anonymous function*/}
    setEvents( (prevEvents) => {
      return prevEvents.filter( (event) => {
        return id !== event.id  
      })
    })
    // console.log(id)
  }

  return (
    <div className="App">

      {/* map method has 'index' as well... cannot be used as a key, just an enumerator */}
      {events.map( (event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>

          {/* we don't want to invove the hClick function when the events are rendered so we put the handler in an anonymous function... */}
          <button onClick={ () => hClick(event.id)}>DEL</button>
        </div>
      ) )}
    </div>
  );
}

export default App;
