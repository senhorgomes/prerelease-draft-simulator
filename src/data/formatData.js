const fs = require("fs");

async function fetchData() {
    const response = await fetch("https://api.swu-db.com/cards/lof");
    const data = await response.json();
    const baseCards = data.data.filter((card) => 
        card.Type === "Base" && card.Rarity !== "Rare"
    )
    const leaderCards = data.data.filter((card) => 
        card.Type === "Leader"
    )
    const commonCards = data.data.filter((card) => 
        card.Rarity === "Common" && card.Type !== "Base" && card.Type !== "Leader"
    )
    const uncommonCards = data.data.filter((card) => 
        card.Rarity === "Uncommon" && card.Type !== "Base" && card.Type !== "Leader"
    )
    const rareCards = data.data.filter((card) => 
        card.Rarity === "Rare" && card.Type !== "Leader"
    )
    const legendaryCards = data.data.filter((card) => 
        card.Rarity === "Legendary" && card.Type !== "Leader"
    )
    // console.log(leaderCards);
    // fs.writeFileSync("lof-draft/baseData.json", JSON.stringify(baseCards, null, 2));
    // fs.writeFileSync("lof-draft/leaderData.json", JSON.stringify(leaderCards, null, 2));
    // fs.writeFileSync("lof-draft/commonData.json", JSON.stringify(commonCards, null, 2));
    // fs.writeFileSync("lof-draft/uncommonData.json", JSON.stringify(uncommonCards, null, 2));
    // fs.writeFileSync("lof-draft/rareData.json", JSON.stringify(rareCards, null, 2));
    // fs.writeFileSync("lof-draft/legendaryData.json", JSON.stringify(legendaryCards, null, 2));
}

fetchData();

// Qui-Gon Jinn and Darth maul are special cards already included.

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

const common = require('./baseData.json');
console.log(common)

