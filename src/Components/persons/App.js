import React from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';

 const person = (props) => {
     const style = {
         '@media (min-width: 500px)':{
             width: '450px'
         }
     }
    return (
        <div className="person" style={style}>
            <h1 onClick={props.click} >{props.name}</h1>
            <p>Your age : {props.age} </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
}
export default Radium(person);