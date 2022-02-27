import Country from "./Country";

const Countries = ({ hideCountries, filteredCountries}) => {

    const filteredLength = filteredCountries.length

    return (
        <div>
            {
                !hideCountries && filteredCountries.map((country, index) => 
                    <Country 
                        key={index} 
                        country={country} 
                        filteredLength={filteredLength} 
                    />    
                )
            }
        </div>
    );
};

export default Countries;