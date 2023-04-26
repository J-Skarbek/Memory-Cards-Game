import React from "react";

function Card(props) {

  return (
    <div 
      className="card flex flex-col justify-items-center 
      bg-offWhite border-2 border-slate-100 rounded-3xl 
      drop-shadow-lg" 
      // onClick={props.tallyScore}
      onClick={props.shuffleCards}
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