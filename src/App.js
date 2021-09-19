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
        
        <One captionEn={cards[0].captionEn}  captionRu={cards[0].captionRu} picture={cards[0].picture} />
        <One captionEn={cards[1].captionEn}  captionRu={cards[1].captionRu} picture={cards[1].picture} />
        <One captionEn='SMR' captionRu='СМР' plan='70' fact='60' picture="./SMR.png" />
        <One captionEn='Indicator 2' captionRu='Показатель 2' plan='50' fact='49' />
        <One captionEn='Indicator 3' captionRu='Показатель 3' plan='50' fact='50' picture={picture} />
        <One captionRu='Показатель 4' plan='50' fact='10' />        
        <One captionEn='Indicator 5' plan='50' fact='90' />
        <One captionEn='Indicator 6' captionRu='Показатель 6' picture={picture} />
        <One/><One/><One/><One plan='90' fact='85' captionRu='индикатор'/>
        </div>

      
      <p>...</p>
    </div>
  );
}

export default App;
