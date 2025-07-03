import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import createPreReleaseDraft from './helpers/createSinglePack';

function App() {
  
  const [packData, setPackData] = useState([]);
  const [packIndex, setPackIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const preReleaseDraft = createPreReleaseDraft();
    setPackData(preReleaseDraft);
    setIsLoading(false);
  }, [])
  if(isLoading) {
    return <div>Loading...</div>
  }


  return (
    <>
      {packData[packIndex].map((singleCard, index)=> {
        console.log(singleCard.Name);
        return (
          <img src={singleCard.FrontArt} alt={singleCard.Name} width={200} />
        )
      })}
      <button onClick={() => setPackIndex(packIndex + 1)} disabled={packIndex === packData.length - 1} >Next Pack</button>
    </>
  )
}

export default App
