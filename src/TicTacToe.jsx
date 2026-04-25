import { useState } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  // 1. Ultra-compact win calculation using array.find()
  const winLine = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ].find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  
  const winner = winLine ? board[winLine[0]] : null;

  // 2. Streamlined click handler
  const play = (i) => {
    if (board[i] || winner) return;
    // Update state inline using map instead of slicing
    setBoard(board.map((val, idx) => idx === i ? (isX ? 'X' : 'O') : val));
    setIsX(!isX);
  };

  // 3. Single render block with inline elements
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>{winner ? `Winner: ${winner}` : `Next: ${isX ? 'X' : 'O'}`}</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: 4, justifyContent: 'center' }}>
        {board.map((cell, i) => (
          <button key={i} onClick={() => play(i)} style={{ height: 60, fontSize: 24 }}>
            {cell}
          </button>
        ))}
      </div>
      
      <button onClick={() => { setBoard(Array(9).fill(null)); setIsX(true); }} style={{ marginTop: 20 }}>
        Restart
      </button>
    </div>
  );
}