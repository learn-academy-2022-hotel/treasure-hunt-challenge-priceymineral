import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleClick = (i) => {
    board[i] = "🏝"
    setBoard([...board])
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((square, index) => {
          return <Square square={square} index={index} handleClick={handleClick} key={index}/>
        })}
      </div>
    </>
  )
}

export default App
