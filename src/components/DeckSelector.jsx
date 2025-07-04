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
    //     },
    //     Command: {
    //         Leader: [],
    //         Base: [],
    //         Unit: [],
    //         Event: [],
    //         Upgrade: [],
    //     },
    //     Cunning: {
    //         Leader: [],
    //         Base: [],
    //         Unit: [],
    //         Event: [],
    //         Upgrade: [],
    //     },
    //     Vigilance: {
    //         Leader: [],
    //         Base: [],
    //         Unit: [],
    //         Event: [],
    //         Upgrade: [],
    //     },
    // };

    // Configuration for different card types
    const cardTypeConfig = {
        Leader: { key: "Leader", isSingle: true },
        Base: { key: "Base", isSingle: true },
        Unit: { key: (card) => card.Arenas[0] === "Ground" ? "GroundUnits" : "SpaceUnits", isSingle: false },
        Event: { key: "Events", isSingle: false },
        Upgrade: { key: "Upgrades", isSingle: false }
    };

    const handleCardClick = (card, count) => {
        const config = cardTypeConfig[card.Type];
        if (!config) return;
        
        const categoryKey = typeof config.key === "function" ? config.key(card) : config.key;
        
        if (config.isSingle) {
            handleSingleCardSelection(card, categoryKey);
        } else {
            handleCountedCardSelection(card, categoryKey, count);
        }
    };

    // Helper function for Leader and Base cards (single selection)
    const handleSingleCardSelection = (card, categoryKey) => {
        setSelectedCards((prev) => ({
            ...prev,
            [categoryKey]: prev[categoryKey].Number === card.Number ? {} : card
        }));
    };

    // Helper function for Unit, Event, and Upgrade cards (count-based)
    const handleCountedCardSelection = (card, categoryKey, maxCount) => {
        setSelectedCards((prev) => {
            const currentSelection = prev[categoryKey][card.Number];
            const isAlreadySelected = currentSelection !== undefined;
            const canIncrement = isAlreadySelected && currentSelection.count < maxCount;
            
            if (canIncrement) {
                return {
                    ...prev,
                    [categoryKey]: {
                        ...prev[categoryKey],
                        [card.Number]: {
                            cardData: card,
                            count: currentSelection.count + 1
                        }
                    }
                };
            } else {
                return {
                    ...prev,
                    [categoryKey]: {
                        ...prev[categoryKey],
                        [card.Number]: {
                            cardData: card,
                            count: 1
                        }
                    }
                };
            }
        });
    };

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
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Base && Object.values(packData.Neutral.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Unit && Object.values(packData.Neutral.Unit).filter(unit => unit.cardData.Arenas === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Unit && Object.values(packData.Neutral.Unit).filter(unit => unit.cardData.Arenas === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Event && Object.values(packData.Neutral.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Upgrade && Object.values(packData.Neutral.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
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
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Base && Object.values(packData.Aggression.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Unit && Object.values(packData.Aggression.Unit).filter(unit => unit.cardData.Arenas === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Unit && Object.values(packData.Aggression.Unit).filter(unit => unit.cardData.Arenas === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Event && Object.values(packData.Aggression.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Upgrade && Object.values(packData.Aggression.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
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
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Base && Object.values(packData.Command.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Unit && Object.values(packData.Command.Unit).filter(unit => unit.cardData.Arenas === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Unit && Object.values(packData.Command.Unit).filter(unit => unit.cardData.Arenas === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Event && Object.values(packData.Command.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Upgrade && Object.values(packData.Command.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
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
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Base && Object.values(packData.Cunning.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Unit && Object.values(packData.Cunning.Unit).filter(unit => unit.cardData.Arenas === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                            {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Unit && Object.values(packData.Cunning.Unit).filter(unit => unit.cardData.Arenas === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Event && Object.values(packData.Cunning.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Upgrade && Object.values(packData.Cunning.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
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
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Base && Object.values(packData.Vigilance.Base).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Unit && Object.values(packData.Vigilance.Unit).filter(unit => unit.cardData.Arenas[0] === "Ground").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Unit && Object.values(packData.Vigilance.Unit).filter(unit => unit.cardData.Arenas[0] === "Space").map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Event && Object.values(packData.Vigilance.Event).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
                                        {cardData.Name} x{count}
                                        <img className="onHoverImage" src={cardData.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Upgrade && Object.values(packData.Vigilance.Upgrade).map(({cardData, count}) => (
                                    <li className="onHover" key={cardData.Number} onClick={() => handleCardClick(cardData, count)}>
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
                {selectedCards.Leader.Name && <h3>Leader: {selectedCards.Leader.Name}</h3>}
                <h3>Ground Units:</h3>
                <ul>
                    {Object.values(selectedCards.GroundUnits).map(({cardData, count})=> 
                        <li>{cardData.Name}, x{count}</li>
                    )}
                </ul>
                <h3>Space Units:</h3>
                <ul>
                    {Object.values(selectedCards.SpaceUnits).map(({cardData, count})=> 
                        <li>{cardData.Name}, x{count}</li>
                    )}
                </ul>
                <h3>Events:</h3>
                <ul>
                    {Object.values(selectedCards.Events).map(({cardData, count})=> 
                        <li>{cardData.Name}, x{count}</li>
                    )}
                </ul>
                <h3>Upgrades:</h3>
                <ul>
                    {Object.values(selectedCards.Upgrades).map(({cardData, count})=> 
                        <li>{cardData.Name}, x{count}</li>
                    )}
                </ul>
            </div>

        </div>
    );
}

export default DeckSelector;