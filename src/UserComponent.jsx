// Importing components
import React from 'react';
import firebase from './firebase';
import { useState } from 'react';

export default function UserComponent({ localUser, getLocal, handleJoinBots }) {
  // Import firebase database and store in function
  const db = firebase.database();
  const [player, setPlayer] = useState('');

  // Initialize handle to target username
  const handlePlayerChange = (e) => {
    setPlayer(e.target.value);
  };

  // Assign play their username, avatar and current score
  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    const newUserObj = db.ref('/currentPlayers').push({
      username: player,
      avatar: `https://robohash.org/${player}`,
      currentScore: 0,
      currentQuestion: 0,
    });
    setPlayer('');
    localUser.push(newUserObj.key, player);
    getLocal(localUser);
    handleJoinBots();
  };

  return (
    <div>
      {/* Form for username input */}
      <form onSubmit={handlePlayerSubmit}>
        <label htmlFor="userInput" className="srOnly">
          Enter your username:
        </label>
        <input
          type="text"
          placeholder="Username"
          value={player}
          onChange={handlePlayerChange}
          id="userInput"
          maxLength={15}
          required
        />

        <button type="button">Join the Bots</button>
      </form>
    </div>
  );
}
