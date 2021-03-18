import { useEffect, useState } from 'react';
import firebase from './firebase.jsx';

function PlayerComponent({ handleLetsPlay, disabled }) {
  const [playerInfo, setPlayerInfo] = useState([]);

  // function disableLetsPlayButton() {
  //   this.state.disabled
  // }

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
      <button className="letsPlay" disabled={disabled} onClick={handleLetsPlay}>
        Let's Play
      </button>
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
                <p>current Score: {currentScore}</p>
                <p>{`currently on: ${currentQuestion} / 10`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PlayerComponent;
