import React, { Component } from 'react';
import './PeopleList.css';

const PeopleList = props => {
  return (
    <div className="test" >
      {props.people.map(person => <div>{person.first_name} {person.last_name}</div>)}
    </div>
  )
}

export default PeopleList;
