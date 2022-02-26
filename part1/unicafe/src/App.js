import { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const incrementGood = () => 
    setGood(good + 1)

  const incrementNeutral = () =>
    setNeutral(neutral + 1)

  const incrementBad = () =>
    setBad(bad + 1)
  

  return(
    <>
      <Header text={"Give Feedback"} />
      <Button text={"Good"} onClick={incrementGood} />
      <Button text={"Neutral"} onClick={incrementNeutral} />
      <Button text={"Bad"} onClick={incrementBad} />
      <Header text={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App;
