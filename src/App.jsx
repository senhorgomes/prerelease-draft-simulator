import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPreReleaseDraft, processPackData } from './helpers/createSinglePack';
import CardSelector from './components/DeckSelector';
function App() {

  const [packData, setPackData] = useState([]);
  const [packIndex, setPackIndex] = useState(0);
  const [processedPackData, setProcessedPackData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState("openPacks"); // openPacks, deckBuilder
  useEffect(() => {
    const preReleaseDraft = createPreReleaseDraft();
    const processedPackData = processPackData(preReleaseDraft);
    setPackData(preReleaseDraft);
    setProcessedPackData(processedPackData);
    setIsLoading(false);
  }, [])
  if (isLoading) {
    return <div>Loading...</div>
  }

  const openNextPack = () => {
    if (packIndex < packData.length - 1) {
      setPackIndex(packIndex + 1);
    } else {
      setMode("deckBuilder");
    }
  }
  const createDeck = () => {
    setMode("deckBuilder");
  }

  return (
    <>
      {mode === "openPacks" && (
        <div>
          <h1>Open Packs</h1>
          <ul>
            {packData[packIndex].map((singleCard, index) => {
              return (
                <li key={singleCard.Number}>
                  <img src={singleCard.FrontArt} alt={singleCard.Name} width={200} />
                </li>
              )
            })}
          </ul>
          {packIndex !== packData.length - 1 && (
            <button onClick={openNextPack} disabled={packIndex === packData.length - 1} >Next Pack</button>
          )}
          {packIndex === packData.length - 1 && (
            <button onClick={createDeck}>Create Deck</button>
          )}
        </div>
      )}
      {mode === "deckBuilder" && (
        <CardSelector packData={processedPackData} />
      )}
    </>
  )
}

export default App
