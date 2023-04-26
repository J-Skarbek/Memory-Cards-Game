import React from "react";

function Card(props) {

  return (
    <div className="card flex flex-col justify-items-center" onClick={props.tallyScore}>
      <img 
        src={props.url}
        alt={props.name}
        className="w-64 my-2 mx-auto"
      />
      <h2>{props.name}</h2>
    </div>
  )
}

export default Card;