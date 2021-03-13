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
import firebase from './firebase';
import { useState, useEffect } from 'react';
import Dropdown from './Dropdown.jsx';
import Category from './Category';

function App() {
  const [data, setDate] = useState ([]);
  const [category, setCategory] = useState([]);
  const [difficulty, setDifficulty] = useState('');

  // axios call to trivia db
  useEffect(() => {
    axios({
      url: 'https://opentdb.com/api.php',
      method: 'GET',
      dataResponse: 'json',
      params: {
        amount: 10,
        category: category,
        difficulty: difficulty,
        // type: 'multiple',
      },
    })
      .then((response) => {
        response = response.data.results;
        setDate(response);
        console.log(response, 'data after diff');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, difficulty]);

  const mapData = () => {

    data.map((categoryName, index) => {
      const {category} = categoryName

      return category
    })
  }

  mapData ();

  return (
    
    <div className="wrapper">
      <h1>Robo Trivia</h1>

      <Dropdown data={data} onChange={(e) => setDifficulty(e.target.value)} />
    

    </div>
  );
}

export default App;
