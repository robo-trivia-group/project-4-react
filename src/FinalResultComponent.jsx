import firebase from './firebase.jsx';

const FinalResultComponent = ({totalScore}) => {

  console.log(totalScore)

  const restartGame = () => {
    const dbRefPlayers = firebase.database().ref().child('currentPlayers');
    dbRefPlayers.remove();
  }


  return (
    <div>
      <p>The Quiz is Over!</p>
      <p>{`Your Total Score is: ${totalScore} /10`}</p>

      <button onClick={restartGame}>Play Again!</button>
    </div>
    
  )
}

export default FinalResultComponent
