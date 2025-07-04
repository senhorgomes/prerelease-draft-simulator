function DeckSelector(packData) {
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
                                {packData.Neutral.Leader.map((leader) => (
                                    <li key={leader.Number}>
                                        {leader.Name}
                                        {/* <img src={leader.FrontArt} alt={leader.Name} width={200} /> */}
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Base.map((base) => (
                                    <li key={base.Number}>
                                        {base.Name}
                                    </li>
                                ))}
                            </td>
                            <td>
                                {packData.Neutral.Unit.filter(unit => unit.Arenas === "Ground").map((unit) => (
                                    <li key={unit.Number}>
                                        {unit.Name}
                                    </li>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Display leaders */}
                {/* Bases */}
                {/* units */}
                {/* events */}
                {/* upgrades */}
                <ul>
                    {packData.Neutral.Leader.map((leader) => (
                        <li key={leader.Number}>
                            <img src={leader.FrontArt} alt={leader.Name} width={200} />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Cards</h2>
            </div>

        </div>
    );
}

export default DeckSelector;