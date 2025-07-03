import completeCardData from '../data/data.json'
import commonCards from '../data/commonData.json'
import uncommonCards from '../data/uncommonData.json'
import legendaryCards from '../data/legendaryData.json'
import rareCards from '../data/rareData.json'
import leaderCards from '../data/leaderData.json'
import baseCards from '../data/baseData.json'
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
function createSinglePack() {
const rangeOfCommons = Array.from({ length: 100 }, (_, i) => i + 1);
const rangeOfUncommons = Array.from({ length: 60 }, (_, i) => i + 1);

const randomLeaderNumber = Math.floor(Math.random() * 18);
const randomBaseNumber = Math.floor(Math.random() * 8);
const arrayOfCommons = rangeOfCommons.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 9)
    .map((cardNumber) => commonCards[cardNumber]);
const arrayOfUncommons = rangeOfUncommons.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 3)
    .map((cardNumber) => uncommonCards[cardNumber]);
const randomRareNumber = Math.floor(Math.random() * 50);
const randomLegendaryNumber = Math.floor(Math.random() * 20);

const singlePack = [leaderCards[randomLeaderNumber], baseCards[randomBaseNumber]].concat(arrayOfCommons, arrayOfUncommons);
return singlePack;
}

export default createSinglePack;
