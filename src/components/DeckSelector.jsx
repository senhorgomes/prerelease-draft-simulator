import { useState } from 'react';
function DeckSelector({packData}) {
    console.log("inside deck selector: ", packData.Neutral.Leader);
    const [selectedCards, setSelectedCards] = useState({
        Leader: {},
        Base: {},
        GroundUnits: {},
        SpaceUnits: {},
        Events: {},
        Upgrades: {},
    });
    // Pack data needs to be processed here
    // I need to create a deck of at least 30 cards
    // I need to loop through each pack, and organize the cards by type
    // Format example
    // const formattedPackData = {
    //     // Aspect.length === 0 is neutral
    //     Neutral: {
    //         Leader: [],
    //         Base: [],
    //         Unit: [],
    //         Event: [],
    //         Upgrade: [],
    //     },
    //     Aggression: {
    //         Leader: [],
    //         Base: [],
    //         Unit: [],
    //         Event: [],
    //         Upgrade: [],
    const handleCardClick = (card, count) => {
        const cardType = card.Type;
        if(cardType === "Leader") {
            if(selectedCards.Leader[card.Number] === card.Number) {
                setSelectedCards((prev) => ({...prev, Leader: {}}));
            } else {
                setSelectedCards((prev) => ({...prev, Leader: card}));
            }
        } else if(cardType === "Base") {
            if(selectedCards.Base[card.Number] === card.Number) {
                setSelectedCards((prev) => ({...prev, Base: {}}));
            } else {
                setSelectedCards((prev) => ({...prev, Base: card}));
            }
        } else if(cardType === "Unit") {
            if(card.Arenas[0] === "Ground") {
                if(selectedCards.GroundUnits[card.Number] === card.Number && selectedCards.GroundUnits[card.Number].count < count) {
                    setSelectedCards((prev) => ({...prev, GroundUnits: {...prev.GroundUnits, [card.Number]: {cardData: card, count: prev.GroundUnits[card.Number].count + count}}}));
                } else {
                    setSelectedCards((prev) => ({...prev, GroundUnits: {...prev.GroundUnits, [card.Number]: {cardData: card, count: 1}}}));
                }
            } else {
                if(selectedCards.SpaceUnits[card.Number] === card.Number && selectedCards.SpaceUnits[card.Number].count < count) {
                    setSelectedCards((prev) => ({...prev, SpaceUnits: {...prev.SpaceUnits, [card.Number]: {cardData: card, count: prev.SpaceUnits[card.Number].count + count}}}));
                } else {
                    setSelectedCards((prev) => ({...prev, SpaceUnits: {...prev.SpaceUnits, [card.Number]: {cardData: card, count: 1}}}));
                }
            }
        } else if(cardType === "Event") {
            if(selectedCards.Events[card.Number] === card.Number && selectedCards.Events[card.Number].count < count) {
                setSelectedCards((prev) => ({...prev, Events: {...prev.Events, [card.Number]: {cardData: card, count: prev.Events[card.Number].count + count}}}));
            } else {
                setSelectedCards((prev) => ({...prev, Events: {...prev.Events, [card.Number]: {cardData: card, count: 1}}}));
            }
        } else if(cardType === "Upgrade") {
            if(selectedCards.Upgrades[card.Number] === card.Number && selectedCards.Upgrades[card.Number].count < count) {
                setSelectedCards((prev) => ({...prev, Upgrades: {...prev.Upgrades, [card.Number]: {cardData: card, count: prev.Upgrades[card.Number].count + count}}}));
            } else {
                setSelectedCards((prev) => ({...prev, Upgrades: {...prev.Upgrades, [card.Number]: {cardData: card, count: 1}}}));
            }
        }
    }

    return (
        <div>
            <h1>Deck Selector</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Leaders</th>
                            <th>Bases</th>
                            <th>Ground Units</th>
                            <th>Space Units</th>
                            <th>Events</th>
                            <th>Upgrades</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Neutral</th>
                            <td>
                                {packData.Neutral.Leader && Object.values(packData.Neutral.Leader).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Leader: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Base && Object.values(packData.Neutral.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Base: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Unit && Object.values(packData.Neutral.Unit).filter(unit => unit.cardData.Arenas === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, GroundUnits: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Unit && Object.values(packData.Neutral.Unit).filter(unit => unit.cardData.Arenas === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, SpaceUnits: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Event && Object.values(packData.Neutral.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Events: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Upgrade && Object.values(packData.Neutral.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Upgrades: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <th>Aggression</th>
                            <td>
                                {packData.Aggression.Leader && Object.values(packData.Aggression.Leader).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Leader: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Base && Object.values(packData.Aggression.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Base: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Unit && Object.values(packData.Aggression.Unit).filter(unit => unit.cardData.Arenas === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, GroundUnits: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Unit && Object.values(packData.Aggression.Unit).filter(unit => unit.cardData.Arenas === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, SpaceUnits: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Event && Object.values(packData.Aggression.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Events: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Upgrade && Object.values(packData.Aggression.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Upgrades: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>  
                        <tr>
                            <th>Command</th>
                            <td>
                                {packData.Command.Leader && Object.values(packData.Command.Leader).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Leader: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Base && Object.values(packData.Command.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Base: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Unit && Object.values(packData.Command.Unit).filter(unit => unit.cardData.Arenas === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, GroundUnits: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Unit && Object.values(packData.Command.Unit).filter(unit => unit.cardData.Arenas === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, SpaceUnits: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Event && Object.values(packData.Command.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Events: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Upgrade && Object.values(packData.Command.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Upgrades: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <th>Cunning</th>
                            <td>
                                {packData.Cunning.Leader && Object.values(packData.Cunning.Leader).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Leader: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Base && Object.values(packData.Cunning.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Base: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Unit && Object.values(packData.Cunning.Unit).filter(unit => unit.cardData.Arenas === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, GroundUnits: cardData})}>
                                            {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Unit && Object.values(packData.Cunning.Unit).filter(unit => unit.cardData.Arenas === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, SpaceUnits: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Event && Object.values(packData.Cunning.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Events: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Upgrade && Object.values(packData.Cunning.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Upgrades: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <th>Vigilance</th>
                            <td>
                                {packData.Vigilance.Leader && Object.values(packData.Vigilance.Leader).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Leader: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Base && Object.values(packData.Vigilance.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => setSelectedCards({...selectedCards, Base: cardData})}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Unit && Object.values(packData.Vigilance.Unit).filter(unit => unit.cardData.Arenas[0] === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Unit && Object.values(packData.Vigilance.Unit).filter(unit => unit.cardData.Arenas[0] === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Event && Object.values(packData.Vigilance.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Upgrade && Object.values(packData.Vigilance.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>  
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Cards</h2>
            </div>

        </div>
    );
}

export default DeckSelector;