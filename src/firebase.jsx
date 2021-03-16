// import firebase module
import firebase from 'firebase/app';
// import the database info from the firebase module
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAadQ1lI-hV0eE5b21B5omZioLvqzUQ7n8',
  authDomain: 'robo-trivia-react.firebaseapp.com',
  projectId: 'robo-trivia-react',
  storageBucket: 'robo-trivia-react.appspot.com',
  messagingSenderId: '311707762572',
  appId: '1:311707762572:web:7f73f10952be2547e0a0a9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// exporting our initialized specifically configured version of OUR firebase app
export default firebase;

// data structure of an array of users, each user is an object: username, avatar, current score, highest score
// data pushed into db on go - update username and score to zero
// display user object onto page
// if question is correct, update user current score
// end of game, check the current score
// sort the values shown on the page to show the highest score
