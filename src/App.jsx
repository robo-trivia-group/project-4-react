<<<<<<< HEAD
import "./styles/styles.scss";
import axios from 'axios';
import firebase from "./firebase";
=======
import  "./styles/styles.scss";
// import firebase from "./firebase";
>>>>>>> ec18ca3ec92bdfb985d6dde4734f46e2422119ff
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
