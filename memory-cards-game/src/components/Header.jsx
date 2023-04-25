import React from "react";

function Header(props) {


  return (
    <div className="header flex justify-between items-center bg-offWhite p-4 mb-8">
      <div className="header-right flex flex-col items-start">
        <h1>Memory Card Game</h1>
        <p>Get points by clicking on an image but don't click on
          any image more than once!
        </p>
      </div>
      <div className="header-left flex flex-col items-end">
        <p>Score: {props.score}</p>
        <p>Best Score: 12</p>
     </div>
    </div>
  )
}

export default Header;