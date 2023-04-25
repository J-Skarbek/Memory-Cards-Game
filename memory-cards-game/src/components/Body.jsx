import React from "react";
import { nanoid } from 'nanoid';
import Card from "./Card";

import Kramer from '../assets/kramer.jpg'
import Newman from '../assets/newman.jpg'
import FDR from '../assets/fdr.jpg'
import Maestro from '../assets/Bobcobb.jpg'
import Elaine from '../assets/Elaine.jpg'
import George from '../assets/george.jpg'
import Kruger from '../assets/kruger.jpg'
import Puddy from '../assets/puddy.jpg'
import Jeannie from '../assets/steinmen.jpg'
import Susan from '../assets/susan-on-seinfeld.jpg'
import Marissa from '../assets/tomai.jpg'
import Jerry from '../assets/jerry.jpg'



function Body(props) {

  const [cards, setCards] = React.useState([
    {
      name: 'Jerry',
      id: nanoid(),
      isClicked: false,
      url: Jerry,
    },
    {
      name: 'George',
      id: nanoid(),
      isClicked: false,
      url: George,
    },
    {
      name: 'Elaine',
      id: nanoid(),
      isClicked: false,
      url: Elaine,
    },
    {
      name: 'Kramer',
      id: nanoid(),
      isClicked: false,
      url: Kramer,
    },
    {
      name: 'Newman',
      id: nanoid(),
      isClicked: false,
      url: Newman,
    },
    {
      name: 'Puddy',
      id: nanoid(),
      isClicked: false,
      url: Puddy,
    },
    {
      name: 'Susan',
      id: nanoid(),
      isClicked: false,
      url: Susan,
    },
    {
      name: 'Franklin Delano Romanowski',
      id: nanoid(),
      isClicked: false,
      url: FDR,
    },
    {
      name: 'Kruger',
      id: nanoid(),
      isClicked: false,
      url: Kruger,
    },
    {
      name: 'Jeannie Steinman',
      id: nanoid(),
      isClicked: false,
      url: Jeannie,
    },
    {
      name: 'Marissa Tomei',
      id: nanoid(),
      isClicked: false,
      url: Marissa,
    },
    {
      name: 'The Maestro',
      id: nanoid(),
      isClicked: false,
      url: Maestro,
    },
  ]);

  // function shuffleCards() {
    
  //   setCards(array => {
  //     const newArr = array;
  //     let m = newArr.length, t, i;
  
  //     // While there remain elements to shuffle…
  //     while (m) {
    
  //       // Pick a remaining element…
  //       i = Math.floor(Math.random() * m--);
    
  //       // And swap it with the current element.
  //       t = newArr[m];
  //       newArr[m] = newArr[i];
  //       newArr[i] = t;
  //     }
  //     return newArr;
  //   })
  //   // console.log(array)
  // }

  function shuffle(array) {
    let newArr = array;
    let m = newArr.length, t, i;
  
      // While there remain elements to shuffle…
      while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = newArr[m];
        newArr[m] = newArr[i];
        newArr[i] = t;
      }
      return newArr;
  }

  function shuffleCards() {
    setCards(shuffle([...cards]))
  }

  function testState() {
    console.log(cards)
  }

  const renderCards = cards.map(card => {
    return (
      <Card
        key={card.id}
        url={card.url}
        isClicked={card.isClicked}
        name={card.name}
        tallyScore={props.tallyScore}
      />
    )
  })

  return (
    <div>
      <p>Test</p>
      <button onClick={() => shuffleCards()}>Click to test shuffle the cards array</button>
      <button onClick={testState}>Click to see the state values</button>
        {/* { cards && renderCards } */}
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              url={card.url}
              isClicked={card.isClicked}
              name={card.name}
              tallyScore={props.tallyScore}
            />
          )
        })}
    </div>
  )
}

export default Body;