import React from "react";

function Card(props) {

  return (
    <div className="card flex flex-col justify-items-center bg-offWhite border-2 border-slate-100 rounded-3xl drop-shadow-lg" onClick={props.tallyScore}>
      <img 
        src={props.url}
        alt={props.name}
        className="w-64 my-2 mx-auto rounded-lg"
      />
      <h2 className="text-xl font-bold">{props.name}</h2>
    </div>
  )
}

export default Card;