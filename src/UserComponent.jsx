import React from 'react';
import firebase from './firebase';
import { useState } from 'react';

export default function UserComponent() {
<<<<<<< HEAD
  const [player, setPlayer] = useState('Player');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const quizRef = db.ref('quiz');
          const newQuizRef = quizRef.push();
          newQuizRef.set({
            player,
            turn: 'player',
            first: 'player',
          });
        }}
      >
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
        <button type="submit">Start the Game!</button>
=======
  const db = firebase.database();
  const [player, setPlayer] = useState('');

  const handlePlayerChange = (e) => {
    setPlayer(e.target.value);
  }

  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    db.ref().push({
      username: player,
      avatar: `https://robohash.org/${player}`,
      currentScore: 0,
      highestScore: 0,
    })
    setPlayer('');
  }

  return (
    <div>
      <form onSubmit={handlePlayerSubmit}>
      <label htmlFor="userInput" className="srOnly">Enter your username:</label>
      <input 
      type="text" 
      placeholder='Username'
      value={player} 
      onChange={handlePlayerChange} 
      id="userInput"
      required
      />

      <button>Join the Bots</button>

>>>>>>> 30a1965fbfafe89391c4611f5689fc9dc23c5e54
      </form>
    </div>
  );
}
