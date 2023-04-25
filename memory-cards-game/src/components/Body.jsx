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



function Body() {

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

  // function updateCards() {
  //   React.useEffect(() => {
  //     console.log('effect test')
  //      displayCards();
  //   }, [cards]);
  // }

  React.useEffect(() => {
    console.log('effect test')
  }, [cards]); // Only re-run the effect if count changes

  function shuffleCards() {
    
    setCards(array => {
      let m = array.length, t, i;
  
      // While there remain elements to shuffle…
      while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    })
    // console.log(array)
  }

  function testState() {
    console.log(cards)
  }

  // function displayCards() {
  //   const renderCards = cards.map(card => {
  //     return (
  //       <Card
  //         key={card.id}
  //         url={card.url}
  //         isClicked={card.isClicked}
  //         name={card.name}
  //       />
  //     )
  //   })
  //   return renderCards;
  // }

  const renderCards = cards.map(card => {
    return (
      <Card
        key={card.id}
        url={card.url}
        isClicked={card.isClicked}
        name={card.name}
      />
    )
  })

  // function displayCards() {
  //   React.useEffect(() => {
  //     console.log('effect test')
  //     const renderCards = cards.map(card => {
  //       return (
  //         <Card
  //           key={card.id}
  //           url={card.url}
  //           isClicked={card.isClicked}
  //           name={card.name}
  //         />
  //       )
  //     })
  //     return renderCards;
  //   }, [cards]);
  // }



  return (
    <div>
      <p>Test</p>
      <button onClick={() => shuffleCards()}>Click to test shuffle the cards array</button>
      <button onClick={testState}>Click to see the state values</button>
        { cards && renderCards }
    </div>
  )
}

export default Body;