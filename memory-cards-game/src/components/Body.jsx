import React from "react";

function Body() {

  const [cards, setCards] = React.useState([
    {
      name: 'Jerry',
    },
    {
      name: 'George',
    },
    {
      name: 'Elaine',
    },
    {
      name: 'Kramer',
    },
    {
      name: 'Newman',
    },
    {
      name: 'Putty',
    },
    {
      name: 'Susan',
    },
    {
      name: 'Franklin Delano Romanowski',
    },
    {
      name: 'Kruger',
    },
    {
      name: 'Mrs. Jerry',
    },
    {
      name: 'Marissa Tomei',
    },
    {
      name: 'Mickey',
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