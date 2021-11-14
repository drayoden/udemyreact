import './App.css';
import { useState } from 'react'

// import the new component
import Title from './components/Title'

function App() {
   
  // boolean state 
  const [showEvents, setShowEvents] = useState(true)
  
  // cycle through the events and display each one...
  const [events, setEvents] = useState([
    {title: "stormy's birthday bash",id: 1},
    {title: "forrest's big 5",id: 2},
    {title: "the boys get catnip",id: 3}
  ])

  console.log(showEvents)

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


  // remember; you cannot have multiple 'parents' inside the JSX, so the new Title component will be a child:
  return (
    <div className="App">
      
      {/* nesting the new Title component in App: */}
      <Title />
      
      {/* use showEvents to control which button is displayed... */}
      {showEvents && (
        <div>
          <button onClick={ () => setShowEvents(false)}>hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={ () => setShowEvents(true)}>show events</button>
        </div>
      )}
      
      {/* showEvents controls if the events are displayed or not */}
      {showEvents && events.map( (event, index) => (
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
