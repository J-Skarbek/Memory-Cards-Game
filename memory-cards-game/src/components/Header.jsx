import React from "react";

function Header(props) {


  return (
    <div className="header flex bg-offWhite">
      <div className="header-right">
        <h1>Memory Card Game</h1>
        <p>Get points by clicking on an image but don't click on
          any image more than once!
        </p>
      </div>
      <div className="header-left">
        <p>Score: 0</p>
        <p>Best Score: 12</p>
     </div>
    </div>
  )
}

export default Header;