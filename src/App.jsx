// the test will not start until user has made an account
// if username exists - update latestScore
// if new user is added, their information is pushed to firebase creating a unique key
// user will be an object {username: xx, avatar: xx, latestScore: xx}
// latestScore will be useState that uses dbRef to UPDATE each unique key
// create a button to display highScores (display database)

// create a form with three inputs: category, difficulty
// create state to encapsulate the selected values for each input
// once three inputs have been populated, onSubmit will send to API call

// useEffects is binded by both useStates and pass in parameters to category and difficulty

// create another state [] to store questions from data api
// push questions into empty array
//? when user selects answer, pop question off array(?)
// compare the answer is correct
//? (answer === correct_answer) ? setCorrectAnswer.push() : null;

//! (maybe we could store all the answers and then compare them at the end.... so that we can show them what the correct answer would have been)

// create another state[] to store correctAnswers
// push correct answers into correctAnswers
// .length to show the amount of right answers

// MULTIPLAYER:
// .map (on the numbers of players selected) to create useStates for correctAnswers const [cA, setCA] = useState ([])
// questionArray does not get popped off until BOTH users hit submit

// Questions for Clients:
// 1. can we use dropdown / radio for error handling quiz
// 2. define multiplayer

import './styles/styles.scss';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FormComponent from './FormComponent.jsx';
import UserComponent from './UserComponent';
import PlayerComponent from './PlayerComponent.jsx';
import QuestionComponent from './QuestionComponent';
import HeaderComponent from './HeaderComponent';
import StartGame from './StartGame';
import Footer from './Footer';

import FinalResultComponent from './FinalResultComponent';

function App() {
  const [allCategory, setAllCategory] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [categoryChoice, setCategoryChoice] = useState('');

  const [allQuestions, setAllQuestions] = useState([]);
  const [goButton, setGoButton] = useState(false);

  const [questionIndex, setquestionIndex] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  let totalScore;
  // const [ userInput, setUserInput] = useState('');

  //todo: axios call to get a full list of Categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          'https://opentdb.com/api_category.php'
        );

        //todo: store all categories in allCategory [], mape thru in CategoryMap to dinamicaly append the drop down menu
        setAllCategory(response.data.trivia_categories);
      } catch (error) {
        alert(error);
      }
    };

    getCategories();
  }, []);

  //todo: main axios call to API to get the questions
  const getQuestions = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php', {
        params: {
          amount: 2,
          encode: 'url3986',
          category: categoryChoice,
          difficulty: difficulty,
          type: 'multiple',
        },
      });

      //todo: store allQuestions [] to later display them one at a time
      setAllQuestions(response.data.results);
    } catch (error) {
      alert(error);
    }
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    setGoButton(false);
  };

  const handleCategoryChange = (e) => {
    setCategoryChoice(e.target.value);
    setGoButton(false);
  };

  const handleGoSubmit = (e) => {
    e.preventDefault();
    getQuestions(difficulty, categoryChoice);
    setGoButton(true);
  };

  // checks if user choice is correct and updates question index to next question
  function handleAnswerSubmit(usersChoice) {
    answersArray.push(usersChoice);
    setquestionIndex(questionIndex + 1);
    checkAnswers();

    if (questionIndex === allQuestions.length - 1) {
      
      setAnswersArray([]);
    }
  }

  // tallies total correct score
  function checkAnswers() {
    setCorrectAnswers(answersArray.filter((answer) => answer === 'true'));
  }

  return questionIndex === 2 ? (
    <FinalResultComponent
      totalScore={totalScore}
    />
  ) : (
    <Router>
      <div className="App">
        <div className="parent">
          <HeaderComponent />
          <div className="wrapper">
            <div className="mainContainer">
              <UserComponent />
              <Route
                exact
                path="/"
                render={() => (
                  <FormComponent
                    handleDifficultyChange={handleDifficultyChange}
                    categoryList={allCategory}
                    handleCategoryChange={handleCategoryChange}
                    handleGoSubmit={handleGoSubmit}
                  />
                )}
              />

              <Route
                path="/"
                render={() => {
                  return (
                    <div className="questionContainer">
                      {goButton && allQuestions[questionIndex] ? (
                        <>
                          <Redirect from="/" exact to="/questions" />
                          <QuestionComponent
                            correctAnswers={correctAnswers}
                            handleAnswerSubmit={handleAnswerSubmit}
                            singleQuestion={allQuestions[questionIndex]}
                            key={questionIndex}
                          />
                        </>
                      ) : (
                        <StartGame />
                      )}
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
