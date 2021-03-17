import React from 'react';
import firebase from './firebase';
import { useState } from 'react';

export default function UserComponent({ localUser, getLocal, handleJoinBots }) {
  const db = firebase.database();
  const [player, setPlayer] = useState('');

  const handlePlayerChange = (e) => {
    setPlayer(e.target.value);
  };

  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    const newUserObj = db.ref('/currentPlayers').push({
      username: player,
      avatar: `https://robohash.org/${player}`,
      currentScore: 0,
      highestScore: 0,
    });
    setPlayer('');
    localUser.push(newUserObj.key, player);
    getLocal(localUser);
  };

  return (
    <div>
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
          required
        />

        <button onClick={handleJoinBots}>Join the Bots</button>
      </form>
    </div>
  );
}
