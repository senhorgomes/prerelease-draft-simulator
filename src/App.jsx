import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createPreReleaseDraft, processPackData} from './helpers/createSinglePack';

function App() {
  
  const [packData, setPackData] = useState([]);
  const [packIndex, setPackIndex] = useState(0);
  const [processedPackData, setProcessedPackData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState("openPacks"); // openPacks, deckBuilder
  useEffect(() => {
    const preReleaseDraft = createPreReleaseDraft();
    const processedPackData = processPackData(preReleaseDraft);
    setProcessedPackData(processedPackData);
    setPackData(preReleaseDraft);
    setIsLoading(false);
  }, [])
  if(isLoading) {
    return <div>Loading...</div>
  }

  const openNextPack = () => {
    if(packIndex < packData.length - 1) {
      setPackIndex(packIndex + 1);
    } else {
      setMode("deckBuilder");
    }
  }

  return (
    <>
    {mode === "openPacks" && (
      <div>
        <h1>Open Packs</h1>
        <ul>
          {packData[packIndex].map((singleCard, index)=> {
            return (
              <li key={singleCard.Number}>
                <img src={singleCard.FrontArt} alt={singleCard.Name} width={200} />
              </li>
            )
          })}
        </ul>
          <button onClick={openNextPack} disabled={packIndex === packData.length - 1} >Next Pack</button>
      </div>
    )}
    {mode === "deckBuilder" && (
      <CardSelector packData={processedPackData} />
    )}
    </>
  )
}

export default App
