import { useState } from 'react';
function DeckSelector({packData}) {
    console.log("inside deck selector: ", packData.Neutral.Leader);
    const [selectedCards, setSelectedCards] = useState({
        Leader: {},
        Base: {},
        GroundUnits: [],
        SpaceUnits: [],
        Events: [],
        Upgrades: [],
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
                                {packData.Neutral.Leader && packData.Neutral.Leader.map((leader) => (
                                    <li className="onHover" key={leader.Number}>
                                        {leader.Name}
                                        <img className="onHoverImage" src={leader.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Base && packData.Neutral.Base.map((base) => (
                                    <li className="onHover" key={base.Number}>
                                        {base.Name}
                                        <img className="onHoverImage" src={base.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Unit && packData.Neutral.Unit.filter(unit => unit.Arenas === "Ground").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Unit && packData.Neutral.Unit.filter(unit => unit.Arenas === "Space").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Event && packData.Neutral.Event.map((event) => (
                                    <li className="onHover" key={event.Number}>
                                        {event.Name}
                                        <img className="onHoverImage" src={event.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Upgrade && packData.Neutral.Upgrade.map((upgrade) => (
                                    <li className="onHover" key={upgrade.Number}>
                                        {upgrade.Name}
                                        <img className="onHoverImage" src={upgrade.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <th>Aggression</th>
                            <td>
                                {packData.Aggression.Leader && packData.Aggression.Leader.map((leader) => (
                                    <li className="onHover" key={leader.Number}>
                                        {leader.Name}
                                        <img className="onHoverImage" src={leader.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Base && packData.Aggression.Base.map((base) => (
                                    <li className="onHover" key={base.Number}>
                                        {base.Name}
                                        <img className="onHoverImage" src={base.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Unit && packData.Aggression.Unit.filter(unit => unit.Arenas === "Ground").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Unit && packData.Aggression.Unit.filter(unit => unit.Arenas === "Space").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Event && packData.Aggression.Event.map((event) => (
                                    <li className="onHover" key={event.Number}>
                                        {event.Name}
                                        <img className="onHoverImage" src={event.FrontArt} width={300} />
                                        </li>
                                ))}
                            </td>
                            <td>
                                {packData.Aggression.Upgrade && packData.Aggression.Upgrade.map((upgrade) => (
                                    <li className="onHover" key={upgrade.Number}>
                                        {upgrade.Name}
                                        <img className="onHoverImage" src={upgrade.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>  
                        <tr>
                            <th>Command</th>
                            <td>
                                {packData.Command.Leader && packData.Command.Leader.map((leader) => (
                                    <li className="onHover" key={leader.Number}>
                                        {leader.Name}
                                        <img className="onHoverImage" src={leader.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Base && packData.Command.Base.map((base) => (
                                    <li className="onHover" key={base.Number}>
                                        {base.Name}
                                        <img className="onHoverImage" src={base.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Unit && packData.Command.Unit.filter(unit => unit.Arenas === "Ground").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Unit && packData.Command.Unit.filter(unit => unit.Arenas === "Space").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Event && packData.Command.Event.map((event) => (
                                    <li className="onHover" key={event.Number}>
                                        {event.Name}
                                        <img className="onHoverImage" src={event.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Command.Upgrade && packData.Command.Upgrade.map((upgrade) => (
                                    <li className="onHover" key={upgrade.Number}>
                                        {upgrade.Name}
                                        <img className="onHoverImage" src={upgrade.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <th>Cunning</th>
                            <td>
                                {packData.Cunning.Leader && packData.Cunning.Leader.map((leader) => (
                                    <li className="onHover" key={leader.Number}>
                                        {leader.Name}
                                        <img className="onHoverImage" src={leader.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Base && packData.Cunning.Base.map((base) => (
                                    <li className="onHover" key={base.Number}>
                                        {base.Name}
                                        <img className="onHoverImage" src={base.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Unit && packData.Cunning.Unit.filter(unit => unit.Arenas === "Ground").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Unit && packData.Cunning.Unit.filter(unit => unit.Arenas === "Space").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Event && packData.Cunning.Event.map((event) => (
                                    <li className="onHover" key={event.Number}>
                                        {event.Name}
                                        <img className="onHoverImage" src={event.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Cunning.Upgrade && packData.Cunning.Upgrade.map((upgrade) => (
                                    <li className="onHover" key={upgrade.Number}>
                                        {upgrade.Name}
                                        <img className="onHoverImage" src={upgrade.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <th>Vigilance</th>
                            <td>
                                {packData.Vigilance.Leader && packData.Vigilance.Leader.map((leader) => (
                                    <li className="onHover" key={leader.Number}>
                                        {leader.Name}
                                        <img className="onHoverImage" src={leader.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Base && packData.Vigilance.Base.map((base) => (
                                    <li className="onHover" key={base.Number}>
                                        {base.Name}
                                        <img className="onHoverImage" src={base.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Unit && packData.Vigilance.Unit.filter(unit => unit.Arenas[0] === "Ground").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Unit && packData.Vigilance.Unit.filter(unit => unit.Arenas[0] === "Space").map((unit) => (
                                    <li className="onHover" key={unit.Number}>
                                        {unit.Name}
                                        <img className="onHoverImage" src={unit.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Event && packData.Vigilance.Event.map((event) => (
                                    <li className="onHover" key={event.Number}>
                                        {event.Name}
                                        <img className="onHoverImage" src={event.FrontArt} width={300} />
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Vigilance.Upgrade && packData.Vigilance.Upgrade.map((upgrade) => (
                                    <li className="onHover" key={upgrade.Number}>
                                        {upgrade.Name}
                                        <img className="onHoverImage" src={upgrade.FrontArt} width={300} />
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