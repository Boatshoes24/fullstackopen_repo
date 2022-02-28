import React from 'react';
import Button from './Button';

const Persons = ({ persons, filterName, deleteHandler }) => {
    return (
        <div>
            <table>
                <tbody>
                    {
                    persons.filter(person => 
                        person.name.toLowerCase()
                        .includes(filterName.toLowerCase()))
                    .map(person => (
                        <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.number}</td>
                        <td><Button deleteHandler={deleteHandler} personId={person.id}/></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Persons;