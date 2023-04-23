import React from "react";
import { nanoid } from 'nanoid'

function Body() {

  const [cards, setCards] = React.useState([
    {
      name: 'Jerry',
      id: nanoid(),
    },
    {
      name: 'George',
      id: nanoid(),
    },
    {
      name: 'Elaine',
      id: nanoid(),
    },
    {
      name: 'Kramer',
      id: nanoid(),
    },
    {
      name: 'Newman',
      id: nanoid(),
    },
    {
      name: 'Putty',
      id: nanoid(),
    },
    {
      name: 'Susan',
      id: nanoid(),
    },
    {
      name: 'Franklin Delano Romanowski',
      id: nanoid(),
    },
    {
      name: 'Kruger',
      id: nanoid(),
    },
    {
      name: 'Mrs. Jerry',
      id: nanoid(),
    },
    {
      name: 'Marissa Tomei',
      id: nanoid(),
    },
    {
      name: 'Mickey',
      id: nanoid(),
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