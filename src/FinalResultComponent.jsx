import firebase from './firebase.jsx';

const FinalResultComponent = ({
  totalScore,
  setQuestionIndex,
  setJoinBots,
  setLetsPlay,
  setGoButton,
  localUser,
  setLocalUser,
  setCorrectAnswers
}) => {

  const restartGame = () => {


    const dbRefCurrent = firebase.database().ref('/currentPlayers').child(localUser[0]);
    dbRefCurrent.once('value')
      .then(snapshot => {
        const username = snapshot.child('username').val();
        const score = snapshot.child('currentScore').val();

        const dbRefScore = firebase.database().ref('/highScore');
        const setRefScore = dbRefScore.push();
        setRefScore.set({
          username: username,
          highScore: score
        })
        
      })

    const dbRefPlayers = firebase.database().ref().child('currentPlayers');
    dbRefPlayers.remove();
    setLocalUser([]);
    setCorrectAnswers([]);
    setQuestionIndex(0);
    setLetsPlay(false);
    setGoButton(false);
    setJoinBots(true);
  };

  return (
    <div>
      <h3>The Quiz is Over!</h3>
      <h3>{`Your Total Score is: ${totalScore} /10`}</h3>

      <button onClick={restartGame}>Play Again!</button>
    </div>
  );
};

export default FinalResultComponent;
