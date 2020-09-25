import React, { useState } from 'react';
import './App.css';
import Appo from './react-logo/App.js';
import Appi from './clients/App.js';
import Person from './personnes/App.js'


const App = props => {
   const [personsState, setPersonsState] = useState({
        persons: [
            {name:'Max', age:'28'},
            {name:'Manu', age:'29'},
            {name:'Stephanie', age:'26'}
        ],
        otherState: "some other value"
    });
    
    const [otherState, setOtherState] = useState('some other value')
    
    console.log(personsState, otherState);
    
    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                {name: newName, age:'28'},
                {name:'Manu', age:'29'},
                {name:'Stephanie', age:'29'}
            ]})
    }

    const nameChangedHandler = (e) => {
        setPersonsState({
            persons: [
                {name: 'Max', age:'28'},
                {name: e.target.value, age:'29'},
                {name:'Stephanie', age:'26'}
                ]
        })
    }
    
    return (
      <div className="App">
        <Appo />
        <Appi />
        <button onClick={switchNameHandler.bind(this,'Yves')}>Switch</button>
        <div className="div-persons">
            <Person 
            name={personsState.persons[0].name} 
            age={personsState.persons[0].age} />
            <Person 
            changed={nameChangedHandler}
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age} />
            <Person
            click={switchNameHandler.bind(this,'Yvesziz')}
            name={personsState.persons[2].name} 
            age={personsState.persons[2].age}>I love soccer</Person>
        </div>
      </div>
    );
}

export default App; 