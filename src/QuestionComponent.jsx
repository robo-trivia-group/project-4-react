function QuestionComponent({ singleQuestion, handleAnswerSubmit }) {
  const { question, correct_answer, incorrect_answers } = singleQuestion;
  

let chosenAnswer;

const handleSelected = (e) => {
  const isCorrectAnswer = e.target.attributes[3].value;
  chosenAnswer = isCorrectAnswer;
}

const handleSingleSubmit = (e) => {
  e.preventDefault();
  handleAnswerSubmit(chosenAnswer)
}

  return (
    <>
      {
        <>
          <li>Question: {decodeURIComponent(question)}</li>
          <form className="choiceContainer" onSubmit={handleSingleSubmit} >
            <span>
              <input
                type="radio"
                id="answer"
                name="answer"
                value={correct_answer}
                onChange={handleSelected}
                correct='true'
                required
              />
              <label className="answerLabel" htmlFor="answer">
                {decodeURIComponent(correct_answer)}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer1"
                name="answer"
                value={incorrect_answers[0]}
                // checked={selected === {correct_answer}}
                onChange={handleSelected}
                correct='false'
              />
              <label className="answerLabel" htmlFor="answer1">
                {decodeURIComponent(incorrect_answers[0])}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer2"
                name="answer"
                value={incorrect_answers[1]}
                // checked={selected === {correct_answer}}
                onChange={handleSelected}
                correct='false'
              />
              <label className="answerLabel" htmlFor="answer2">
                {decodeURIComponent(incorrect_answers[1])}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer3"
                name="answer"
                value={incorrect_answers[2]}
                // checked={selected === {correct_answer}}
                onChange={handleSelected}
                correct='false'
              />
              <label className="answerLabel" htmlFor="answer3">
                {decodeURIComponent(incorrect_answers[2])}
              </label>
            </span>
            <button>Submit</button>
          </form>
        </>
      }
    </>
  );
}

export default QuestionComponent;