import completeCardData from './data/data.json'
import commonCards from './data/commonData.json'
import uncommonCards from './data/uncommonData.json'
import legendaryCards from './data/legendaryData.json'
import rareCards from './data/rareData.json'
import leaderCards from './data/leaderData.json'

const rangeOfCommons = Array.from({ length: 100 }, (_, i) => i + 1);
const ranngeOfUncommons = Array.from({ length: 60 }, (_, i) => i + 1);
const arrayOfCommons = rangeOfCommons.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 9);
const arrayOfUncommons = ranngeOfUncommons.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 3);
console.log(arrayOfUncommons);