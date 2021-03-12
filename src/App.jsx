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
  // when user selects answer, pop question off array(?)
  // compare the answer is correct 
  // (answer === correct_answer) ? setCorrectAnswer.push() : null;

// create another state[] to store correctAnswers 
  // push correct answers into correctAnswers
  // .length to show the amount of right answers

// MULTIPLAYER:
  // .map to create useStates for correctAnswers
  // questionArray does not get popped off until BOTH users hit submit


// Questions for Clients:
// 1. can we use dropdown / radio for error handling quiz
// 2. define multiplayer

import "./styles/styles.scss";
import axios from 'axios';
import firebase from "./firebase";
import {useState, useEffect} from 'react';

function App() {
  // const [ cityData, setCityData] = useState([]);
  // useEffect(() => {
  //   const dbRef = firebase.database().ref();
  //     dbRef.on("value", (data) => {
  //       const cityData = data.val();
  //       const cityBag = [];
  //       for (let cityKey in cityData) {
  //         cityBag.push({
  //           uniqueKey: cityKey,
  //           title: cityData[cityKey]
  //         });
  //       }
  //       setCityData(cityBag);
  //       console.log(cityData);
  //     });
  // }, []);

  // axios call to trivia db
  useEffect(() =>{
    axios({
      url: 'https://opentdb.com/api.php?amount=10',
      method: 'GET',
      dataResponse: 'json',
      params: {
        amount: 10,
        category: 27, // to be dynamic
        difficulty: 'easy', // to be dynamic
        type: 'multiple'
      }
    }).then(res => {
      const triviaData = res.data.results;
      console.log(triviaData);
    }).catch(err => {
      console.log(err);
    })
  },[]);


  return (
    <div className="wrapper">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
