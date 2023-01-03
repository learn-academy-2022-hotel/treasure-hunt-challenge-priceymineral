import React from "react"

const Square = ({ square, index, handleClick }) => {
  return (
    <>
      <div className="square" onClick={()=>handleClick(index)}>{square}</div>
    </>
  )
}
export default Square
