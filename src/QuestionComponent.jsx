function QuestionComponent({ singleQuestion, handleAnswerSubmit }) {
  const { question, correct_answer, incorrect_answers } = singleQuestion;
  return (
    <>
      {
        <>
          <li>Question: {decodeURIComponent(question)}</li>
          <form className="choiceContainer" onSubmit={handleAnswerSubmit} >
            <span>
              <input
                type="radio"
                id="answer"
                name="answer"
                value={correct_answer}
              />
              <label className="answerLabel" htmlFor="answer">
                {decodeURIComponent(correct_answer)}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer"
                name="answer"
                value={incorrect_answers[0]}
              />
              <label className="answerLabel" htmlFor="answer">
                {decodeURIComponent(incorrect_answers[0])}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer"
                name="answer"
                value={incorrect_answers[1]}
              />
              <label className="answerLabel" htmlFor="answer">
                {decodeURIComponent(incorrect_answers[1])}
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer"
                name="answer"
                value={incorrect_answers[2]}
              />
              <label className="answerLabel" htmlFor="answer">
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
