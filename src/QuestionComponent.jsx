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
<<<<<<< HEAD
                {decodeURIComponent(randomAnswers[0])}
              </label>
=======
                <span>
                  {decodeURIComponent(correct_answer)}
                </span>                
              </label>              
>>>>>>> 8988671f9f4b70ea1816e3d4c16fef2d88384404
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
<<<<<<< HEAD
                {decodeURIComponent(randomAnswers[1])}
=======
                <span>
                  {decodeURIComponent(incorrect_answers[0])}
                </span> 
>>>>>>> 8988671f9f4b70ea1816e3d4c16fef2d88384404
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
<<<<<<< HEAD
                {decodeURIComponent(randomAnswers[2])}
=======
                <span>
                  {decodeURIComponent(incorrect_answers[1])}
                </span>                
>>>>>>> 8988671f9f4b70ea1816e3d4c16fef2d88384404
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
<<<<<<< HEAD
                {decodeURIComponent(randomAnswers[3])}
=======
                <span>
                  {decodeURIComponent(incorrect_answers[2])}
                </span> 
>>>>>>> 8988671f9f4b70ea1816e3d4c16fef2d88384404
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
