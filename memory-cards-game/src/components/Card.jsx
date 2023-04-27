import React from "react";

function Card(props) {

  // function handleClick() {
  //   props.shuffleCards();
  // }

  // function handleClick(e) {
  //   console.log(e.target)
  //   console.log(e.target.alt)
  //   console.log(e.target.textContent)
  //   // console.log(e)
  //   let newArr = [...props.cardsState]
  //   const findCharacter = newArr.find(character => character.name === e.target.textContent)
  //   console.log(findCharacter.value + ' is a success')
  // }

  // function showStatus() {
  //   () => console.log(props.isClicked)
  // }


  //What needs to happen:
  // OnClick, get the item from state that corresponds to the item clicked on
  // Then, check to see if isClicked is 'false' and if it is -> 
  // Then, pull in all props, but change isClicked to 'true'
  // There is no need for a toggle, because if it says true, it triggers end-game
  // If isClicked is 'true' when it's clicked on, That will then record the score, 
  //     compare it to the high score, and then update the high score value. This will
  //     Also prompt the user to click a button to starte a new game.
  // When new game button is clicked, all objects in state isClicked needs to be set
  //     to 'false' and the current score value needs to be set to 0


  return (
    <div 
      className="card flex flex-col justify-items-center 
      bg-offWhite border-2 border-slate-100 rounded-3xl 
      drop-shadow-lg" 
      // onClick={(e) => handleClick(e)}
      // onClick={() => console.log(props.isClicked)}
      // onClick={props.shuffleCards}
      onClick={props.testFunction}
    >
      <img 
        src={props.url}
        alt={props.name}
        className="w-64 mx-auto rounded-lg"
      />
      <h2 className="text-xl m-4 font-bold whitespace-normal">{props.name}</h2>
    </div>
  )
}

export default Card;