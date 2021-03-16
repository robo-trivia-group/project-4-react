function QuestionComponent({ singleQuestion, handleAnswerSubmit }) {
  const { question, correct_answer, incorrect_answers } = singleQuestion;
  

  let chosenAnswer;

  const handleSelected = (e) => {
    const isCorrectAnswer = e.target.value;

    if (isCorrectAnswer === correct_answer) {
      chosenAnswer = 'true';
    }
  }

  const handleSingleSubmit = (e) => {
    e.preventDefault();
    handleAnswerSubmit(chosenAnswer)
  }

  const randomAnswers = [];
  randomAnswers.push(correct_answer);
  randomAnswers.push(...incorrect_answers);
  
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
        <div className="questions">          
          <h3>{decodeURIComponent(question)}</h3>
          <form className="choiceContainer" onSubmit={handleSingleSubmit} >
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
            <button>submit</button>
          </form>
        </div>
      }
    </>
  );
}

export default QuestionComponent;
