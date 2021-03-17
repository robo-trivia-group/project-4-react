import { useEffect, useState } from 'react';
import firebase from './firebase.jsx';

function PlayerComponent({handleLetsPlay}) {
  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref('/currentPlayers');

    dbRef.on('value', (data) => {
      const playerData = data.val();

      const copyArray = [];

      for (let key in playerData) {
        copyArray.push({
          uniqueKey: key,
          playerData: playerData[key]
        });
      }

      setPlayerInfo(copyArray);
    });
  }, []);

  return (
    <div className="playerDisplay">
      <h2>Current Players:</h2>
      <ul className="playerContainer">
        {playerInfo.map((player, index) => {
          const {username, avatar, currentScore, highestScore} = player.playerData;
          return (
            <li key={index}>
              <div className='imgContainer'>
              <img
                className='userAvatar'
                src={avatar}
                alt={`Robot avatar for ${username}`}
              />
              </div>
              
              <div className='scoreContainer'>
                <h3>{username}</h3>
                <p>Current Score: {currentScore}</p>
                <p>High Score: {highestScore}</p>
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
