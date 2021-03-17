import firebase from './firebase.jsx';

const FinalResultComponent = ({
  totalScore,
  setQuestionIndex,
  setJoinBots,
  setLetsPlay,
  setGoButton,
}) => {
  // console.log(totalScore)

  const restartGame = () => {
    const dbRefPlayers = firebase.database().ref().child('currentPlayers');
    dbRefPlayers.remove();
    setQuestionIndex(0);
    setLetsPlay(false);
    setGoButton(false);
    setJoinBots(true);
  };

  return (
    <div>
      <p>The Quiz is Over!</p>
      <p>{`Your Total Score is: ${totalScore} /10`}</p>

      <button onClick={restartGame}>Play Again!</button>
    </div>
  );
};

export default FinalResultComponent;
