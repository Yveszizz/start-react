import React, { Component } from 'react';
import './App.css';
import Appo from './react-logo/App.js';
import Appi from './clients/App.js';
import Person from './personnes/App.js'


class App extends Component {
   state = {
        persons: [
            {id:'1',name:'Max', age:'28'},
            {id:'2',name:'Manu', age:'29'},
            {id:'3',name:'Stephanie', age:'26'}
        ],
        otherState: "some other value",
        showPersons: false
    };
    
    
   deletePersonHandler = (personIndex) => {
       const persons = this.state.persons.slice();
       persons.splice(personIndex,1);
       this.setState({persons:persons})
   }

    nameChangedHandler = (e) => {
        this.setState({
            persons: [
                {name: 'Max', age:'28'},
                {name: e.target.value, age:'29'},
                {name:'Stephanie', age:'26'}
                ]
        })
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    
    render () {
        
        let persons = null;
        
        if (this.state.showPersons) {
            persons = (
                <div className="div-persons">
                    {this.state.persons.map((person, index) => {
                        return <Person 
                                click={() => this.deletePersonHandler(index)}
                                name={person.name} 
                                age={person.age} 
                                key={person.id}/>
                    })}
                </div>
            )
        }

       return (
            <div className="App">
                <Appo />
                <Appi />
                <button onClick={this.togglePersonsHandler}>Switch</button>
                {persons}
            </div>
        ); 
    }
}

export default App; 