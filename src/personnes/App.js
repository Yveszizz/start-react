import React from 'react';
import './App.css';

 const person = (props) => {
    return (
    <div className="person">
        <h1 onClick={props.click} >{props.name}</h1>
        <p>Your age : {props.age} </p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
    </div>
    );
}
export default person;