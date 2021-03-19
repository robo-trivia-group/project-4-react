// Importing components and states
import { useEffect, useState } from 'react';
import firebase from './firebase.jsx';

function PlayerComponent({ handleLetsPlay, disabled }) {
  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    //Retrieve data from firebase
    const dbRef = firebase.database().ref('/currentPlayers');

    dbRef.on('value', (data) => {
      const playerData = data.val();

      const copyArray = [];
      // Pushing player unique data to an array
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
    {/* Button to begin quiz */}
      <button className="letsPlay" disabled={disabled} onClick={handleLetsPlay}>
        Let's Play
      </button>
      {/* Display active players and scores in sidebar */}
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
                  alt={`avatar for ${username}`}
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
    </>
  );
}

export default PlayerComponent;
