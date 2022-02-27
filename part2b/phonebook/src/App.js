import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        const newPersons = res.data
        setPersons(newPersons)
      })
  }, [])

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
