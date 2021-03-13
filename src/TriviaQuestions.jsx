function TriviaQuestions({ questions }) {
  return (
    <>
      {questions.map((quizQuestions, index) => {
        const { question, correct_answer, incorrect_answer } = quizQuestions;

        return (
          <div>
            <li key={index}>
              Q{index + 1} {question}
            </li>
            <li key={index}>ANSWER: {correct_answer}</li>
            <li key={index}>Incorrect: {incorrect_answer}</li>
          </div>
        );
      })}
    </>
  );
}

export default TriviaQuestions;
