import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import completeCardData from './data/data.json'
import commonCards from './data/commonData.json'
import uncommonCards from './data/uncommonData.json'
import legendaryCards from './data/legendaryData.json'
import rareCards from './data/rareData.json'
import leaderCards from './data/leaderData.json'

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


  }, [])
  

  return (
    <>
      
    </>
  )
}

export default App
