import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'forrest'
  
  const hClick = () => {
    name = 'stormy'
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
