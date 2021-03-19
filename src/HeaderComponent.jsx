import firebase from './firebase.jsx';
import {useEffect, useState} from 'react';

function HeaderComponent() {

  const [ scoreBoard, setScoreBoard ] = useState([]);

  useEffect(() => {
    const dbScores = firebase.database().ref('/highScore');
    dbScores.on('value', (data) => {
      const dataVal = data.val()

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

  const clearScoreBoard = () => {
    const dbRef = firebase.database().ref('/highScore');
    dbRef.set({
      hi: 'test'
    });
  }

  return (
    <header>
      <div className="wrapper">
        <h1>Robo Trivia</h1>  
      </div>  

      <div className="scoreBoard">
        <h5>Genius-Bots:</h5>
        <ul className="highScores">
          {
            scoreBoard.map((score, index) => {
              const {username, highScore} = score;
              return (
                <li key={index}><span className="userName">{username}</span>: <span>{highScore}</span> points</li>
              )
            })
          }

        </ul>
        <button onClick={clearScoreBoard}>Recycle Bots</button>
      </div>
    </header>
  );
}

export default HeaderComponent;
