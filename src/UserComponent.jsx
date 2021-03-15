import React from 'react';
import firebase from './firebase';
import { useState } from 'react';

const db = firebase.database();

export default function UserComponent() {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        const quizRef = db.ref('quiz');
        const newQuizRef = quizRef.push();
        newQuizRef.set({
          player1,
          player2,
          turn: "player1",
          first: "player1"
        })
      }}>
      <label htmlFor="userInput"></label>
      <input 
      type="text" 
      value={player1} 
      onChange={(e) => setPlayer1(e.target.value)} 
      id="userInput"
      />
      <input 
      type="text" 
      value={player2} 
      onChange={(e) => setPlayer2(e.target.value)} 
      id="userInput"
      />
      <button type='submit'>Start the Game!</button>

      </form>
    </div>
  )
}
