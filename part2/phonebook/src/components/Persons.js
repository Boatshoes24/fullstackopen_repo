import React from 'react';

const Persons = ({ persons, filterName }) => {
    return (
        <div>
            <table>
                <tbody>
                    {
                    persons.filter(person => 
                        person.name.toLowerCase()
                        .includes(filterName.toLowerCase()))
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

export default Persons;