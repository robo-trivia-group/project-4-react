// Importing components
import firebase from './firebase.jsx';
import {useEffect, useState} from 'react';
import { GrPowerReset } from 'react-icons/gr';

function HeaderComponent() {

  // Initialize scoreBoard state
  const [ scoreBoard, setScoreBoard ] = useState([]);

  useEffect(() => {
    // Retrieve data from firebase
    const dbScores = firebase.database().ref('/highScore');
    dbScores.on('value', (data) => {
      const dataVal = data.val()
      // Pushing Users score to leaderboard
      const unsortedArr = [];

      for (let key in dataVal) {
        unsortedArr.push(dataVal[key]);
      }

      const sortedArr = unsortedArr.sort((a, b) => {
        return  b.highScore - a.highScore
      })

      setScoreBoard(sortedArr);
    })
  }, [])

  // Function to clear scoreboard
  const clearScoreBoard = () => {
    const dbRef = firebase.database().ref('/highScore');
    dbRef.set({});
  }

  return (
    <header>
      {/* Adding components to Header */}
      <div className="wrapper">
        <h1>Robo Trivia</h1>
      </div>

      <div className="scoreBoard">
        <h5>Genius-Bots:</h5>
        <ul className="highScores">
          {scoreBoard.map((score, index) => {
            const { username, highScore } = score;
            return (
              <li key={index}>
                {username}: <span>{highScore}</span> points
              </li>
            );
          })}
        </ul>
        <button className="recycle"
          title="Reset Genius-Bots"
          aria-label="Reset Genius-Bots"
          onClick={clearScoreBoard}
        >
          <span className="recycleText"><GrPowerReset /></span>
        </button>
      </div>
    </header>
  );
}

export default HeaderComponent;
