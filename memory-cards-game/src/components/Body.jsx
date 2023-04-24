import React from "react";
import { nanoid } from 'nanoid'
import kramer from '../assets/kramer.jpg'

function Body() {

  const [cards, setCards] = React.useState([
    {
      name: 'Jerry',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'George',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'Elaine',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'Kramer',
      id: nanoid(),
      isClicked: false,
      url: kramer,
    },
    {
      name: 'Newman',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'Putty',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'Susan',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'Franklin Delano Romanowski',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'Kruger',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'Mrs. Jerry',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'Marissa Tomei',
      id: nanoid(),
      isClicked: false,
      url: '',
    },
    {
      name: 'The Maestro',
      id: nanoid(),
      isClicked: false,
      url: '',
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
      <img src={kramer} alt='kramer'/>
  
    </div>
  )
}

export default Body;