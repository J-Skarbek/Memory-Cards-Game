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
  ])

  console.log(cards)

  return (
    <div>
      <p>Test</p>
    </div>
  )
}

export default Body;