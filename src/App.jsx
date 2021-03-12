import  "./styles/styles.scss";
// import firebase from "./firebase";
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


  return (
    <div className="wrapper">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
