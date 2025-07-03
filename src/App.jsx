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


  return (
    <>
    <ul>
      {packData[packIndex].map((singleCard, index)=> {
        return (
          <li key={singleCard.Number}>
            <img src={singleCard.FrontArt} alt={singleCard.Name} width={200} />
          </li>
        )
      })}
    </ul>
      <button onClick={() => setPackIndex(packIndex + 1)} disabled={packIndex === packData.length - 1} >Next Pack</button>
    </>
  )
}

export default App
