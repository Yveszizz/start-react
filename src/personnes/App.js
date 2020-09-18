import React from 'react';
import './App.css';

 const person = (props) => {
    return (
    <div className="person">
        <h1>{props.name}</h1>
        <p>Your age : {props.age} </p>
        <p>{props.children}</p>
    </div>
    );
}
export default person;