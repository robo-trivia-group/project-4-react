// Importing components
import firebase from './firebase.jsx';

// Initialize params for FinalResultComponent function
const FinalResultComponent = ({
  totalScore,
  setQuestionIndex,
  setJoinBots,
  setLetsPlay,
  setGoButton,
  localUser,
  setLocalUser,
  setCorrectAnswers,
  setDisabled,
  handlePlayAgain,
  letsPlayDisabled,
  setLetsPlayDisabled
}) => {
  // Function to retrieve players from Firebase and push their scores and usernames to highscore
  const restartGame = () => {
    const dbRefCurrent = firebase
      .database()
      .ref('/currentPlayers')
      .child(localUser[0]);
    dbRefCurrent.once('value').then((snapshot) => {
      const username = snapshot.child('username').val();
      const score = snapshot.child('currentScore').val();

      const dbRefScore = firebase.database().ref('/highScore');
      const setRefScore = dbRefScore.push();
      setRefScore.set({
        username: username,
        highScore: score,
      });
    });

    // Function to remove Players from the quiz once quiz is finished
    const dbRefPlayers = firebase.database().ref('/currentPlayers').child(localUser[0]);
    dbRefPlayers.remove();
    setLocalUser([]);
    setCorrectAnswers([]);
    setQuestionIndex(0);
    setLetsPlay(false);
    setGoButton(false);
    setJoinBots(true);
    setDisabled(false);
    setLetsPlayDisabled(false)
  };

  return (
    <div>
      <h3>The Quiz is Over!</h3>
      <h3>{`Your Total Score is: ${totalScore} /10`}</h3>

      <button
      className="playAgainBtn" 
      disabled={letsPlayDisabled} 
      onClick={handlePlayAgain}>
        Play Again?
        </button>
      <button 
      className="playAgainBtn" 
      disabled={!letsPlayDisabled} 
      onClick={restartGame}>
          Log High Score!
        </button>
        {letsPlayDisabled && (
          <>
            <h3>Be sure to checkout the friendly bots...</h3>
            <h3>Are you the smartest bot?</h3>
          </>
        )}
    </div>
  );
};

export default FinalResultComponent;
