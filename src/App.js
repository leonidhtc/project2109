import logo from "./logo.svg";
import picture from "./picture.png";
import "./App.css";
import One from "./One";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />
        
        <p>
          Inception...
        </p>
        <One caption='Показатель 1' plan='50' fact='10' picture={logo} />
        <One caption='Показатель 2' plan='50' fact='49' />
        <One caption='Показатель 3' plan='50' fact='50' picture={picture} />
        <One caption='Показатель 4' plan='50' fact='10' />        
        <One caption='Показатель 5' plan='50' fact='90' />
      </header>
    </div>
  );
}

export default App;
