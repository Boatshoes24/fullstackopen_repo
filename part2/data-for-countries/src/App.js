import { useEffect, useState } from 'react'
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ filterTerm, setFilterTerm ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  const searchFilterHandler = (event) => {
    setFilterTerm(event.target.value)
  }

  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(filterTerm.toLowerCase())
  )

  const hideCountries = filteredCountries.length < 1 || filteredCountries.length > 10


  return (
    <div>
      <h1>Countries</h1>
      <Filter 
        searchFilterHandler={searchFilterHandler}
        hideCountries={hideCountries}
      />
      <Countries 
        filteredCountries={filteredCountries}
        hideCountries={hideCountries}
      />
    </div>
  );
};

export default App;
