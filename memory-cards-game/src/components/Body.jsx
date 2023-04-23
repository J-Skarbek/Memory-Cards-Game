import React from "react";
import { nanoid } from 'nanoid'

function Body() {

  const [cards, setCards] = React.useState([
    {
      name: 'Jerry',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'George',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Elaine',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Kramer',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Newman',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Putty',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Susan',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Franklin Delano Romanowski',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Kruger',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Mrs. Jerry',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Marissa Tomei',
      id: nanoid(),
      isClicked: false,
    },
    {
      name: 'Mickey',
      id: nanoid(),
      isClicked: false,
    }
  ]);

  function shuffleCards(array) {
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

  return (
    <div>
      <p>Test</p>
      <button onClick={() => shuffleCards(cards)}>Click to test shuffle the cards array</button>
      <button onClick={testState}>Click to see the state values</button>
  
    </div>
  )
}

export default Body;