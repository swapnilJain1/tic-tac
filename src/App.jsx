import { useState } from 'react'
import './App.css'
import TicTacToe from './TicTacToe';

function App() {
  const [isCross, setIsCross] = useState(true)
  const [board, setBoard] = useState(Array(9).fill(""));

  const handleClick = (index) => {
    // 2. Prevent overwriting a box that already has a value
    if (board[index] !== "") return;

    // 3. Create a copy of the current board (don't mutate state directly!)
    const newBoard = [...board];

    // 4. Update only the clicked index based on the turn
    newBoard[index] = isCross ? "X" : "O";

    // 5. Save the updated array and flip the turn
    setBoard(newBoard);
    setIsCross(!isCross);
    isWinner(newBoard)
  };

// console.log(board)
const isWinner = (newBoard) =>{
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Check if the first box isn't empty AND all three boxes match
    if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
      console.log("Winner is:", newBoard[a]);
      // alert("Winner is:" + newBoard[a])
      setTimeout(()=>{
        alert(`Winner is: ${newBoard[a]}`)
      }, 100)
      // alert(`Winner is: ${newBoard[a]}`);
      return newBoard[a]; 
    }
  }
  return null;
}
// alert("No winner")
  return (
  //   <div className="container">
  //   {board.map((value, index) => (
  //     <div key={index} className="box" onClick={()=>handleClick(index)}>{value}</div>
  //   ))}
  //   <button onClick={()=>setBoard(Array(9).fill(""))}>Reset</button>
  // </div>
  <TicTacToe />

  )
}

export default App
