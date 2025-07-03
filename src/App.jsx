import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const [packData, setPackData] = useState([]);

  useEffect(() => {

    // Create a pack of 16 cards
  // 1 leader, 1 base, 9 common cards, 3 uncommon cards, 1 rare or legendary, and any other card.

  // 20 Legendary 0-19
  // 50 Rare 0-49
  // 60 Uncommon 0-59
  // 100 Common create numbers between 0-99
  // 8 Bases 0-7 
  // Leader 0-17
  // Legendary is only 1 in eight packs 12.5%
  // Make eight packs, choose 6. One of them is a legendary
  // Math.floor(Math.random() * max
    // Create initial array of numbers;
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
