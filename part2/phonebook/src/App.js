import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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

  const addFilter = (event) => {
    setFilterName(event.target.value)
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
        <Filter 
          onChangeHandler={addFilter}
        />
        <h2>Add New Person</h2>
        <PersonForm 
          personAdd={addPerson} 
          numberAdd={handleNumber} 
          nameAdd={handleName}
          nameValue={newName}
          numberValue={newNumber}
        />
        <h2>Numbers</h2>
        <Persons persons={persons} filterName={filterName} />        
    </div>
  );
};

export default App;
