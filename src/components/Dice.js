import React, { useState, useEffect } from 'react';
import './../App.css';

const Dice = () => {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);

  // Roll the dice every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      rollDice();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const rollDice = () => {
    const newDiceOne = Math.floor(Math.random() * 6) + 1;
    const newDiceTwo = Math.floor(Math.random() * 6) + 1;
    setDiceOne(newDiceOne);
    setDiceTwo(newDiceTwo);
    console.log(newDiceOne + ' ' + newDiceTwo);
  };

  return (
    <div className="game">
      <div className="container">
        <div id="dice1" className={`dice dice-one show-${diceOne}`}>
          <div className="side one"><div className="dot one-1"></div></div>
          <div className="side two"><div className="dot two-1"></div><div className="dot two-2"></div></div>
          <div className="side three"><div className="dot three-1"></div><div className="dot three-2"></div><div className="dot three-3"></div></div>
          <div className="side four"><div className="dot four-1"></div><div className="dot four-2"></div><div className="dot four-3"></div><div className="dot four-4"></div></div>
          <div className="side five"><div className="dot five-1"></div><div className="dot five-2"></div><div className="dot five-3"></div><div className="dot five-4"></div><div className="dot five-5"></div></div>
          <div className="side six"><div className="dot six-1"></div><div className="dot six-2"></div><div className="dot six-3"></div><div className="dot six-4"></div><div className="dot six-5"></div><div className="dot six-6"></div></div>
        </div>
      </div>
      <div className="container">
        <div id="dice2" className={`dice dice-two show-${diceTwo}`}>
          <div className="side one"><div className="dot one-1"></div></div>
          <div className="side two"><div className="dot two-1"></div><div className="dot two-2"></div></div>
          <div className="side three"><div className="dot three-1"></div><div className="dot three-2"></div><div className="dot three-3"></div></div>
          <div className="side four"><div className="dot four-1"></div><div className="dot four-2"></div><div className="dot four-3"></div><div className="dot four-4"></div></div>
          <div className="side five"><div className="dot five-1"></div><div className="dot five-2"></div><div className="dot five-3"></div><div className="dot five-4"></div><div className="dot five-5"></div></div>
          <div className="side six"><div className="dot six-1"></div><div className="dot six-2"></div><div className="dot six-3"></div><div className="dot six-4"></div><div className="dot six-5"></div><div className="dot six-6"></div></div>
        </div>
      </div>
    </div>
  );
};

export default Dice;
