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
            <li>ANSWER: {correct_answer}</li>
            <li>Incorrect: {incorrect_answers[0]}</li>
          </div>
        );
      })}
    </>
  );
}

export default TriviaQuestions;
