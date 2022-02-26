import { useState } from "react"
import Button from "./Button"
import Votes from "./Votes"
import Headers from "./Headers"

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const points = new Uint8Array(anecdotes.length)

  const [ selected, setSelected ] = useState(0)
  const [ allPoints, setAllPoints ] = useState(points)
  const [ highestVote, setHighestVote ] = useState(0)

  const selectNextAnecdote = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelected)
  }  

  const increaseVote = () => {
    const newPoints = [...allPoints]
    newPoints[selected] += 1
    if(newPoints[selected] > newPoints[highestVote]) {
      setHighestVote(selected)
    }
    setAllPoints(newPoints)
  }

  return (
    <>
      <Headers text={"Anecdote of the day"} />
      {anecdotes[selected]}
      <Votes votes={allPoints[selected]} />
      <br />
      <Button text={"Vote"} onClick={increaseVote} />
      <Button text={"Next Anecdote"} onClick={selectNextAnecdote} />
      <Headers text={"Anecdote with most votes"} />
      {anecdotes[highestVote]}
      <Votes votes={allPoints[highestVote]} />
    </>
  )
}

export default App
