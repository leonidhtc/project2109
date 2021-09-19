import picture from "./picture.png";
import cards from "./screen.js"
import "./App.css";
import One from "./One";


function App() {
  console.log(cards);
  return (
    <div className="App">
     <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />
        <p>Inception...</p>
     </header>

        <div className='grid'>
        {
          cards.map( (card) => {
            const { plan, fact, captionEn, captionRu, picture } = card;
            return <One plan={plan} fact={fact} captionEn={captionEn}  captionRu={captionRu} picture={picture} />;
          })
        }
        </div>

    <p>...</p>
    </div>
  );
}

export default App;
