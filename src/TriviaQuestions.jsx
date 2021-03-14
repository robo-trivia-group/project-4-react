function TriviaQuestions({ questions }) {
  
  return (
    <>
      {questions.map((quizQuestions, index) => {
        const { question, correct_answer, incorrect_answers } = quizQuestions;
        return (
          <div>
            <li>
              Q{index + 1} {question}
            </li>
            <form action="">
              <input type="radio" id="answer" name="answer" value={correct_answer}/>
              <label htmlFor="answer">{correct_answer}</label>
              <input type="radio" id="answer" name="answer" value={incorrect_answers[0]}/>
              <label htmlFor="answer">{incorrect_answers[0]}</label>
              <input type="radio" id="answer" name="answer" value={incorrect_answers[1]}/>
              <label htmlFor="answer">{incorrect_answers[1]}</label>
              <input type="radio" id="answer" name="answer" value={incorrect_answers[2]}/>
              <label htmlFor="answer">{incorrect_answers[2]}</label>
            </form>
            <button type="submit">submit</button>
          </div>
        );
      })}
    </>
  );
}

export default TriviaQuestions;
