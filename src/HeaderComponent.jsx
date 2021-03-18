import firebase from './firebase.jsx';
import {useEffect, useState} from 'react';

function HeaderComponent() {

  // const [ scoreBoard, setScoreBoard ] = useState([]);
  
  // get data from firebase, store into an array
  // make a copy of sort by either reduce()
  // set sorted into state

  useEffect(() => {
    const dbScores = firebase.database().ref('/highScore');
    dbScores.on('value', (data) => {
      const dataVal = data.val()
      console.log(dataVal);
    })
      // console.log(data.val());
      // const recordedScores = data.val();
      // const scoreArray = [];
      // scoreArray.push(recordedScores);
      // setScoreBoard(scoreArray);
  }, [])

  // const sortedArray = scoreBoard.sort((a, b) => {
  //   return parseFloat(a.highScore) - parseFloat(b.highScore);
    
  // })
  
  // console.log(sortedArray);


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
