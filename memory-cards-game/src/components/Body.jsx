import React from "react";

function Body() {

  const [cards, setCards] = React.useState([
    {
      name: 'card 1',
    },
    {
      name: 'card 2'
    },
    {
      name: 'card 3'
    },
    {
      name: 'card 4'
    },
    {
      name: 'card 5',
    },
    {
      name: 'card 6'
    },
    {
      name: 'card 7'
    },
    {
      name: 'card 8'
    },
    {
      name: 'card 9',
    },
    {
      name: 'card 10'
    },
    {
      name: 'card 11'
    },
    {
      name: 'card 12'
    }
  ]);

  // function shuffle(array) {
  //   let m = array.length, t, i;
  
  //   // While there remain elements to shuffle…
  //   while (m) {
  
  //     // Pick a remaining element…
  //     i = Math.floor(Math.random() * m--);
  
  //     // And swap it with the current element.
  //     t = array[m];
  //     array[m] = array[i];
  //     array[i] = t;
  //   }
  //   console.log(array);
  //   return setCards(array);
  // }

  function shuffleCards(array) {
    // let newArr = array;
    setCards(newArr => {
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
    })
    // console.log(newArr)
  }


  function testState() {
    console.log(cards)
  }
  // console.log(cards)

  return (
    <div>
      <p>Test</p>
      <button onClick={() => shuffleCards(cards)}>Click to test shuffle the cards array</button>
      <button onClick={testState}>Click to see the state values</button>
  
    </div>
  )
}

export default Body;