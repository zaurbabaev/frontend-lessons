import { useState } from "react";

export default function DiceGame() {
  const [dice, setDice] = useState(1);
  const [score, setScore] = useState(0);

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setDice(random);
    setScore((prevScore) => prevScore + random);
  };

  const resetGame = () => {
    setDice(1);
    setScore(0);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-72 rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-2xl font-bold">🎲 Zər Oyunu</h1>
        <img
          src={`/dice/dice${dice}.png`}
          alt={`Dice ${dice}`}
          className="mx-auto mb-6 h-32 w-32"
        />
        <button
          onClick={rollDice}
          className="mb-3 w-30 rounded-lg bg-blue-500 py-2 text-white transition hover:to-blue-600"
        >
          Zəri at
        </button>
        <button
          className="w-30 rounded-lg bg-gray-500 py-2 text-gray-800 transition hover:bg-gray-400"
          onClick={resetGame}
        >
          Reset
        </button>
        <div className="mt-4 space-y-1 text-lg">
          <p className="mt-4">
            Dəyər: <span className="font-bold">{dice}</span>
          </p>
          <p className="mt-4">
            Score: <span className="font-bold">{score}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
