import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const tallyScore = () => setScore(score => score += 1);

  const resetTheScore = () => {
    if (score < highScore) {
      return setScore(0)
    } else {
      return setHighScore(score)
    }
  }

  return (
    <div className="App">
      <Header 
        score={score}
        highScore={highScore}
      />
      <Body 
        score={score}
        tallyScore={tallyScore}
        resetScore={resetTheScore}
      />
    </div>
  )
}

export default App
