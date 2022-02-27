import { useState } from 'react'

const Country = ({ country, filteredLength }) => {

    const [ isShown, setIsShown ] = useState(false)

    let languages = []
    for(const language in country.languages) {
        languages.push(country.languages[language])
    }

    const updateShow = () => {
        setIsShown(!isShown)
    }

    if(filteredLength === 1) {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <br />
                <h4>Languages:</h4>
                <ul>
                    {
                        languages.map((language, index) => 
                            <li key={index}>{language}</li>
                        )
                    }
                </ul>
                <img src={country.flags.png} alt="image of country flag" />
            </div>
        )
    }
    return (
        <div>
            <h1>{country.name.common}</h1>
            <button onClick={updateShow}>Show</button>
            {
                isShown &&
                <div>
                    <p>Capital: {country.capital}</p>
                    <p>Area: {country.area}</p>
                    <br />
                    <h4>Languages:</h4>
                    <ul>
                        {
                            languages.map((language, index) => 
                                <li key={index}>{language}</li>
                            )
                        }
                    </ul>
                    <img src={country.flags.png} alt="image of country flag" />
                </div> 
            }
        </div>
    )
};

export default Country;