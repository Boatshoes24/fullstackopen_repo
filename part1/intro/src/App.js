const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Wade"
  const age = 10
  
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Wade" age={26 + 10}/>
      <Hello name={name} age={age}/>
    </>
  )
}

export default App;
