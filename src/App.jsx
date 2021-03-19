// Importing components
import './styles/styles.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import firebase from './firebase.jsx';
import FormComponent from './FormComponent.jsx';
import UserComponent from './UserComponent';
import PlayerComponent from './PlayerComponent.jsx';
import QuestionComponent from './QuestionComponent';
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';

import FinalResultComponent from './FinalResultComponent';

function App() {
  //Initialize States
  const [allCategory, setAllCategory] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [categoryChoice, setCategoryChoice] = useState('');

  const [allQuestions, setAllQuestions] = useState([]);
  const [goButton, setGoButton] = useState(false);
  const [letsPlay, setLetsPlay] = useState(false);
  const [joinBots, setJoinBots] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [letsPlayDisabled, setLetsPlayDisabled] = useState(false);
  
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const [localUser, setLocalUser] = useState([]);

  // Total score exported to Firebase
  let totalScore;
  totalScore = correctAnswers.length;
  const db = firebase.database();

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

  // Call to Open Trivia API to retrieve questions, categories and difficulty
  //todo: main axios call to API to get the questions
  const getQuestions = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php', {
        params: {
          amount: 10,
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

  // Storing users difficulty selection
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    setGoButton(false);
  };

  // Storing users category selection
  const handleCategoryChange = (e) => {
    setCategoryChoice(e.target.value);
    setGoButton(false);
  };

  // Initialize go button to import users quiz and display users current question
  const handleGoSubmit = (e) => {
    e.preventDefault();
    getQuestions(difficulty, categoryChoice);
    setGoButton(true);
    setLetsPlay(false);
    const dbRefUser = db.ref(`/currentPlayers/${localUser[0]}`);
    dbRefUser.update({
      currentQuestion: firebase.database.ServerValue.increment(1),
    });
  };

  // Initialize Play again button
  const handlePlayAgain = (e) => {
    e.preventDefault();
    setLetsPlayDisabled(true);
  }

  // Initialize let's play button
  const handleLetsPlay = (e) => {
    e.preventDefault();
    setLetsPlay(true);
    setGoButton(false);
    setDisabled(true);
  };

  // Initialize User login to quiz
  const handleJoinBots = () => {
    setJoinBots(false);
    setDisabled(false);
  };

  // testing phase - getting local user
  const getLocalUser = (local) => {
    setLocalUser(local);
  };

  // checks if user choice is correct and updates question index to next question
  function handleAnswerSubmit(usersChoice) {
    const dbRefUser = db.ref(`/currentPlayers/${localUser[0]}`);

    if (usersChoice) {
      dbRefUser.update({
        currentScore: firebase.database.ServerValue.increment(1),
      });
    }

    answersArray.push(usersChoice);
    setQuestionIndex(questionIndex + 1);
    checkAnswers();

    if (questionIndex < allQuestions.length - 1) {
      dbRefUser.update({
        currentQuestion: firebase.database.ServerValue.increment(1),
      });
    }

    if (questionIndex === allQuestions.length - 1) {
      setAnswersArray([]);
    }
  }

  // tallies total correct score
  function checkAnswers() {
    setCorrectAnswers(answersArray.filter((answer) => answer === 'true'));
  }

  return (
    <div className="App">
      <HeaderComponent />

      <div className="wrapper">
        <div className="mainContainer">
          <div className="userSetupContainer">
            {joinBots && (
              <UserComponent
                handleJoinBots={handleJoinBots}
                localUser={localUser}
                getLocal={getLocalUser}
              />
            )}
            <PlayerComponent
              disabled={disabled}
              handleLetsPlay={handleLetsPlay}
            />
          </div>

          {!joinBots && letsPlay ? (
            <div className="formContainer animate__animated animate__slideInRight">
              <FormComponent
                handleDifficultyChange={handleDifficultyChange}
                categoryList={allCategory}
                handleCategoryChange={handleCategoryChange}
                handleGoSubmit={handleGoSubmit}
              />
            </div>
          ) : null}

          {goButton && allQuestions[questionIndex] && (
            <div className="questionContainer animate__animated animate__slideInRight">
              <QuestionComponent
                correctAnswers={correctAnswers}
                handleAnswerSubmit={handleAnswerSubmit}
                singleQuestion={allQuestions[questionIndex]}
                key={questionIndex}
                index={questionIndex}
              />
            </div>
          )}

          {questionIndex > 0 && questionIndex === allQuestions.length ? (
            <div className="finalResultContainer animate__animated animate__slideInRight">
              <FinalResultComponent
                setGoButton={setGoButton}
                setLetsPlay={setLetsPlay}
                setJoinBots={setJoinBots}
                setQuestionIndex={setQuestionIndex}
                totalScore={totalScore}
                localUser={localUser}
                setLocalUser={setLocalUser}
                setCorrectAnswers={setCorrectAnswers}
                setDisabled={setDisabled}
                letsPlayDisabled={letsPlayDisabled}
                handlePlayAgain={handlePlayAgain}
                setLetsPlayDisabled={setLetsPlayDisabled}
              />
            </div>
          ) : null}
        </div>
        {/**end of mainContainer */}
      </div>
      {/**end of wrapper*/}

      <Footer />
    </div>
  );
}

export default App;
