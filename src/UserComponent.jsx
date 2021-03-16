import React from 'react';
import firebase from './firebase';
import { useState } from 'react';

const db = firebase.database();

export default function UserComponent() {
  const [player, setPlayer] = useState("Player");

  return (
    <div>
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
      <label htmlFor="userInput"></label>
      <input 
      type="text" 
      value={player} 
      onChange={(e) => setPlayer(e.target.value)} 
      id="userInput"
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
