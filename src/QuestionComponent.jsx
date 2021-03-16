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
        <div className="questions">          
          <h3>{decodeURIComponent(question)}</h3>
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
                <span>
                  {decodeURIComponent(correct_answer)}
                </span>                
              </label>              
            </span>

            <span>
              <input
                type="radio"
                id="answer1"
                name="answer"
                value={incorrect_answers[0]}
                onChange={handleSelected}
                correct='false'
              />
              <label className="answerLabel" htmlFor="answer1">
                <span>
                  {decodeURIComponent(incorrect_answers[0])}
                </span> 
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer2"
                name="answer"
                value={incorrect_answers[1]}
                onChange={handleSelected}
                correct='false'
              />
              <label className="answerLabel" htmlFor="answer2">
                <span>
                  {decodeURIComponent(incorrect_answers[1])}
                </span>                
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="answer3"
                name="answer"
                value={incorrect_answers[2]}
                onChange={handleSelected}
                correct='false'
              />
              <label className="answerLabel" htmlFor="answer3">
                <span>
                  {decodeURIComponent(incorrect_answers[2])}
                </span> 
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
