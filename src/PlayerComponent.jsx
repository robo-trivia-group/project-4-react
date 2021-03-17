import { useEffect, useState } from 'react';
import firebase from './firebase.jsx';

function PlayerComponent({ handleLetsPlay }) {
  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref('/currentPlayers');

    dbRef.on('value', (data) => {
      const playerData = data.val();

      const copyArray = [];

      for (let key in playerData) {
        copyArray.push({
          uniqueKey: key,
          playerData: playerData[key],
        });
      }

      setPlayerInfo(copyArray);
    });
  }, []);

  return (
    <>
      <h3>Current Players:</h3>
      <ul className="playingInfoContainer">
        {playerInfo.map((player, index) => {
          const {
            username,
            avatar,
            currentScore,
            currentQuestion,
          } = player.playerData;
          return (
            <li key={index}>
              <div className="imgContainer">
                <img
                  className="userAvatar"
                  src={avatar}
                  alt={`Robot avatar for ${username}`}
                />
              </div>

              <div className="scoreContainer">
                <h4>{username}</h4>
                <p>Current Score: {currentScore}</p>
                <p>{`Currently on: ${currentQuestion} / 10`}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <button onClick={handleLetsPlay}>Let's Play</button>
    </>
  );
}

export default PlayerComponent;
