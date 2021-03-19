function QuestionComponent({
  singleQuestion,
  handleAnswerSubmit,
  correctAnswers,
  index
}) {
  const { question, correct_answer, incorrect_answers } = singleQuestion;

  let chosenAnswer;

  // checks if answer is correct
  const handleSelected = (e) => {
    const isCorrectAnswer = e.target.value;

    if (isCorrectAnswer === correct_answer) {
      chosenAnswer = 'true';
    }
  };

  // passes correct answer to app on submit
  const handleSingleSubmit = (e) => {
    e.preventDefault();
    handleAnswerSubmit(chosenAnswer);
  };

  // puts all separate answers into an array
  const randomAnswers = [];
  randomAnswers.push(correct_answer);
  randomAnswers.push(...incorrect_answers);

  // shuffles all answers
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const num = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[num];
      array[num] = temp;
    }

    return array;
  }

  shuffle(randomAnswers);
  
  return (
    <>
      {
        <div className="wrapper">
        <div className="questions">
          {/* Assigns each question a number */}
          <h3>Question #{index + 1}: {decodeURIComponent(question)}</h3>
        {/* Answer selections assigned to radio buttons */}
          <form className="choiceContainer" onSubmit={handleSingleSubmit}>
            <span>
              <input
                type="radio"
                id="answer"
                name="answer"
                value={randomAnswers[0]}
                onChange={handleSelected}
                required
              />
              <label className="answerLabel" htmlFor="answer">
                {decodeURIComponent(randomAnswers[0])}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer1"
                name="answer"
                value={randomAnswers[1]}
                onChange={handleSelected}
              />
              <label className="answerLabel" htmlFor="answer1">
                {decodeURIComponent(randomAnswers[1])}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer2"
                name="answer"
                value={randomAnswers[2]}
                onChange={handleSelected}
              />
              <label className="answerLabel" htmlFor="answer2">
                {decodeURIComponent(randomAnswers[2])}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer3"
                name="answer"
                value={randomAnswers[3]}
                onChange={handleSelected}
              />
              <label className="answerLabel" htmlFor="answer3">
                {decodeURIComponent(randomAnswers[3])}
              </label>
            </span>
            {/* Current score display */}
            <div className="animation">
              <p>current score is:</p> 
              <h4 className="animate__animated animate__shakeY">{correctAnswers.length}</h4>
            </div>
            
            <button>Submit</button>
          </form>
        </div>
        </div>
      }
    </>
  );
}

export default QuestionComponent;
