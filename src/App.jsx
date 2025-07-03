import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pack from './helpers/createSinglePack';

function App() {
  
  const [packData, setPackData] = useState([]);
  const {singlePack, secondPack} = pack;
  console.log(singlePack);
  console.log(secondPack);
  useEffect(() => {

   
    const rangeOfCommons = Array.from({length: 100}, (_, i) => i +1);
    const ranngeOfUncommons = Array.from({length: 60}, (_, i) => i +1);
    const arrayOfCommons = rangeOfCommons.map(value => ({value, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(({value})=> value)
    .slice(0, 9);
    const arrayOfUncommons = ranngeOfUncommons.map(value => ({value, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(({value})=> value)
    .slice(0, 3);
    console.log(arrayOfUncommons);
  }, [])
  

  return (
    <>
      
    </>
  )
}

export default App
