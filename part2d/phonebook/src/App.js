import { useState, useEffect } from "react";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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

    const personExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
  
    if(personExists) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const foundPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        const newPerson = {...foundPerson, number: newNumber}
        personService
          .update(foundPerson.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== foundPerson.id ? person : returnedPerson))
            setErrorMessage(`Updated ${newName}`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            setPersons(persons.filter(person => person.id !== foundPerson.id))
            setErrorMessage(`Error: ${newName} has already been deleted from the server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })        
      }
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
  
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
      setErrorMessage(`Added ${newName}`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    } 
    setNewName('')
    setNewNumber('')   
  }

  const removePerson = (personId) => {
    const personData = persons.filter(person => person.id === personId)
    const personName = personData[0].name
    if(window.confirm(`Delete ${personName}?`)) {
      personService
        .remove(personId)
        .then(() => {
          setPersons(persons.filter(person => person.id !== personId))
          setErrorMessage(`Removed ${personName}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(err => {
          setPersons(persons.filter(person => person.id !== personId))
          setErrorMessage(`Error: ${personName} has already been removed`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      
    }
    
  }

  return (
    <div>
        <h2>Phonebook 2d</h2>
        <Notification message={errorMessage} />
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
        <Persons persons={persons} filterName={filterName} deleteHandler={removePerson}/>        
    </div>
  );
};

export default App;
