function PlayersInput(){
  let numberOfPlayers;
  const handlePlayerChange = (event) => {
    numberOfPlayers=event.target.value
    console.log(numberOfPlayers);
  }
  return(
    <div>
      <form action="">
        <label htmlFor="selectedPlayers" className="srOnly"></label>
        <select onChange={handlePlayerChange} id="selectPlayers" required>
          <option value="1">Solo</option>
          <option value="2">2 Players</option>
          <option value="3">3 Players</option>
          <option value="4">4 Players</option>
        </select>
      </form>
    </div>
  )
}
export default PlayersInput;

// let players = []
// for (let i=0; i<=numberOfPlayers; i++){
//   playersInput.push({
//     name:""
//     }
//   )
// }
// return players;