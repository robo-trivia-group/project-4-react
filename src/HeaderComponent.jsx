import firebase from './firebase.jsx';
import {useEffect, useState} from 'react';

function HeaderComponent() {

  const [ scoreBoard, setScoreBoard ] = useState([]);
  
  useEffect(() => {
    const dbScores = firebase.database().ref('/highScore');
    dbScores.on('value', (data) => {
      const recordedScores = data.val();
      const scoreArray = [];
      scoreArray.push(recordedScores);
      setScoreBoard(scoreArray);
    })
  }, [])

  scoreBoard.sort((a, b) => {
    return parseFloat(a.highScore) - parseFloat(b.highScore);
    
  })
  
  console.log(scoreBoard, 'score');


  return (
    <header>
      <div className="wrapper">
        <h1>Robo Trivia</h1>  
      </div>  

      <div>

      </div>
    </header>
  );
}

export default HeaderComponent;
