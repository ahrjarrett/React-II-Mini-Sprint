import React, { Component } from 'react';
import './PeopleList.css';

export const PeopleList = ({ people }) => {
  return (
    <div className="test" >
      {people.map(person => <div>{person.first_name} {person.last_name}</div>)}
    </div>
  )
}

//export default PeopleList;
