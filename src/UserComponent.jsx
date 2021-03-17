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
    handleJoinBots();
  };

  return (
    <div>
      <form onSubmit={handlePlayerSubmit}>
        <label htmlFor="userInput" className="srOnly">
          Enter your username:
        </label>
        <input
          type="text"
          placeholder="username"
          value={player}
          onChange={handlePlayerChange}
          id="userInput"
          maxLength={15}
          required
        />

        <button>Join the Bots</button>
      </form>
    </div>
  );
}
