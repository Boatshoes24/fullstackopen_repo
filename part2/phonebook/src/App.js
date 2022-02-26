import { useState } from "react";

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas', number: '040-123456'},
    {name: 'Test Person1', number: '000-123456'},
    {name: 'Test Person2', number: '000-123456'},
    {name: 'Test Person3', number: '000-123456'},
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.some(person => newName === person.name)
    if(duplicate) {
      window.alert(`${newName} is already added to the phonebook`)
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
    }     
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
        <h2>Phonebook</h2>
          <div>
            Filter names with:
            <input 
              value={filterName} 
              onChange={event => setFilterName(event.target.value)} 
            />
          </div>
        <h2>Add New</h2>
        <form onSubmit={addPerson}>
          <div>
            Name: <input value={newName} onChange={handleName} />
          </div>
          <div>
            Number: <input value={newNumber} onChange={handleNumber} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <table>
          <tbody>
            {
              persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
              .map(person => (
                <tr key={person.name}>
                  <td>{person.name}</td>
                  <td>{person.number}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        
    </div>
  );
};

export default App;
