import React from "react";

function Card(props) {

  return (
    <div className="card">
      <img 
        src={props.url}
        alt={props.name}
      />
      <h2>{props.name}</h2>
    </div>
  )
}

export default Card;