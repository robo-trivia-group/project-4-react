import { useEffect, useState } from 'react';
import firebase from './firebase.jsx';

function PlayerComponent({handleLetsPlay}) {
  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (data) => {
      const playerData = data.val();

      const copyArray = [];

      for (let key in playerData) {
        copyArray.push(playerData[key]);
      }

      setPlayerInfo(copyArray);
    });
  }, []);

  return (
    <div className="playerDisplay">
      <h2>Current Players:</h2>
      <ul className="playerContainer">
        {playerInfo.map((player, index) => {
          return (
            <li key={index}>
              <div className='imgContainer'>
              <img
                className='userAvatar'
                src={player.avatar}
                alt={`Robot avatar for ${player.username}`}
              />
              </div>
              
              <div className='scoreContainer'>
                <h3>{player.username}</h3>
                <p>Current Score: {player.currentScore}</p>
                <p>High Score: {player.highestScore}</p>
              </div>
            </li>
          );
        })}
      </ul>
      
      <button onClick={handleLetsPlay}>Let's Play</button>
    </div>
  );
}

export default PlayerComponent;
