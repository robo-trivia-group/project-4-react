import { useEffect, useState } from 'react';
import firebase from './firebase.jsx';

function PlayerComponent() {

    const [ playerInfo, setPlayerInfo ] = useState([]);

    useEffect(() => {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (data) => {
        const playerData = data.val();

        const copyArray = [];

        for (let key in playerData) {
            copyArray.push(playerData[key]);
        }

        setPlayerInfo(copyArray);

        })
},[]);


    return (
        <div className="playerDisplay">
            <h2>Current Players:</h2>
            <ul className="playerContainer">
            {
                playerInfo.map((player, index) => {
                    return (
                        <li key={index}>
                            <img src={player.avatar} alt={`Robot avatar for ${player.username}`}/>
                            <h3>{player.username}</h3>
                            <p>Current Score: {player.currentScore}</p>
                            <p>High Score: {player.highestScore}</p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default PlayerComponent;