
const Filter = ({ hideCountries, searchFilterHandler }) => {

    return (
        <div>
            <input type="text" onChange={searchFilterHandler} />
            <p>{hideCountries ? 'Too many matches, please add further specification' : ''}</p>
        </div>
    );
};

export default Filter;