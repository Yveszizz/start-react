import React, { Component } from 'react';
import './App.css';
import Header from './Components/react-logo/Header.js';
import Appi from './Components/clients/App.js';
import Persons from './Components/Persons/Persons';
import Radium, {StyleRoot} from 'radium';
import Cockpit from './Components/Cockpit/Cockpit';


class App extends Component {
   state = {
        persons: [
            {id:'azaz', name:'Max', age:'28'},
            {id:'zezez', name:'Manu', age:'29'},
            {id:'ereerr', name:'Stephanie', age:'26'}
        ],
        otherState: "some other value",
        showPersons: false
    };
    
    
   deletePersonHandler = (personIndex) => {
       const persons = this.state.persons.slice();
       persons.splice(personIndex,1);
       this.setState({persons:persons})
   }

    nameChangedHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex((p) => p.id === id
        )
        
        const person = {
            ...this.state.persons[personIndex]
        }
        
        person.name = e.target.value;
        
        const persons = this.state.persons.slice();
        persons[personIndex] = person;
                
        this.setState({persons:persons})
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
                    <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
                </div>
            );
        }


       return (
           <StyleRoot>
                <div className="App">
                    <Header />
                    <Appi />
                    <Cockpit 
                        persons={this.state.persons} 
                        clicked={this.togglePersonsHandler} 
                        showPersons={this.state.showPersons} />
                    {persons}
                </div>
            </StyleRoot>
        ); 
    }
}

export default Radium(App); 