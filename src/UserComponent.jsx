import React from 'react';
import firebase from './firebase';
import { useState } from 'react';

const db = firebase.database();

export default function UserComponent() {
  const [player, setPlayer] = useState("");

  return (
    <div className="wrapper">
      <form onSubmit={e => {
        e.preventDefault();
        const quizRef = db.ref('quiz');
        const newQuizRef = quizRef.push();
        newQuizRef.set({
          player,
          turn: "player",
          first: "player"
        })
      }}>
      <label htmlFor="userInput" className="srOnly">User Name</label>
      <input 
      type="text" 
      value={player} 
      onChange={(e) => setPlayer(e.target.value)} 
      id="userInput"  
      placeholder="your name"    
      required
      />
      {/* <input 
      type="text" 
      value={player2} 
      onChange={(e) => setPlayer2(e.target.value)} 
      id="userInput"
      /> */}      
        <button type='submit'>Start the Game!</button>
      
      </form>
    </div>
  )
}
