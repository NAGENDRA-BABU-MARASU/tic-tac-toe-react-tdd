import { useState } from "react";
import Square from "../Square/Square";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square dataTestId="square0" value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square dataTestId="square1" value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square dataTestId="square2" value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square dataTestId="square3" value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square dataTestId="square4" value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square dataTestId="square5" value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square dataTestId="square6" value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square dataTestId="square7" value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square dataTestId="square8" value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}