import React, { useState } from 'react';

function DiceRoller() {
  const [dice, setDice] = useState([1, 1, 1]);
  const [score, setScore] = useState(0);

  function rollDice() {
    const newDice = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDice(newDice);

    if (newDice[0] === newDice[1] && newDice[1] === newDice[2]) {
      setScore(6 * newDice[0]);
    } else if (newDice[0] === 4 && newDice[1] === 5 && newDice[2] === 6) {
      setScore(100);
    } else if (newDice.includes(1) && newDice.includes(2) && newDice.includes(3)) {
      setScore(1);
    } else {
      setScore(Math.max(...newDice));
    }
  }

  return (
    <div>
      <button onClick={rollDice}>Roll the Dice</button>
      <div>
        {dice.map((die, index) => (
          <img key={index} src={`assets/dice${die}.png`} alt={`die ${index}`} />
        ))}
      </div>
      <p>Your score: {score}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header><h1>CEE-LO Dice game</h1></header>  
    
      <section id= "main"><h2>Welcome To Cee Lo! The street dice game!</h2></section>

      <DiceRoller />

      <select id ="char-select">
          <option value = "assets/worldDice">Choose Your Dice Roller!</option>
          <option value ="https://media4.giphy.com/media/cIxx7i1rj137W/giphy.gif">Ashy Larry</option>
          <option value ="https://thumbs.gfycat.com/SolidConfusedGannet-max-1mb.gif">Dylan (hot fire)</option>
          <option value ="https://i.gifer.com/origin/34/347a4814ed811e9e6199fd795c5c56ec_w200.gif">Grits and Gravy</option>
          <option value ="https://cdn.quotesgram.com/img/26/20/1543885355-tumblr_miuoq2jy1E1qfrkf9o2_250.gif">Leonard Washington</option>
          <option value ="https://media2.giphy.com/media/8miPNVlKhbtjW/giphy.gif">Phyuch Yiu</option>
      </select>
      <img id="char-image" src="assets/worldDice.png" alt="player selected"/>
    
      <select id ="char-select2">
        <option value = "assets/worldDice">Choose Your Dice Roller!</option>
        <option value ="https://media4.giphy.com/media/cIxx7i1rj137W/giphy.gif">Ashy Larry</option>
        <option value ="https://thumbs.gfycat.com/SolidConfusedGannet-max-1mb.gif">Dylan (hot fire)</option>
          <option value ="https://i.gifer.com/origin/34/347a4814ed811e9e6199fd795c5c56ec_w200.gif">Grits and Gravy</option>
          <option value ="https://cdn.quotesgram.com/img/26/20/1543885355-tumblr_miuoq2jy1E1qfrkf9o2_250.gif">Leonard Washington</option>
          <option value ="https://media2.giphy.com/media/8miPNVlKhbtjW/giphy.gif">Phyuch Yiu</option>
      </select>
    </div>
  )
}

export default App