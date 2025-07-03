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
      {packData[packIndex].map((pack, index)=> {
        console.log(pack);
        return (
          <img src={pack.FrontArt} alt={pack.Name} width={200} />
        )
      })}
    </>
  )
}

export default App
