import React, { Component } from 'react';
import './App.css';
import Header from './Components/react-logo/Header.js';
import Appi from './Components/clients/App.js';
import Person from './Components/persons/App.js';
import Radium, {StyleRoot} from 'radium';


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
        const style = {
            backgroundColor:'green',
            border:'1px solid blue',
            color:'white',
            padding:'8px',
            cursor: 'pointer',
            margin:'10px',
            ':hover':{
                backgroundColor:'lightgreen',
                color:'black',
            }
        }
        
        let persons = null;
        
        if (this.state.showPersons) {
            persons = (
                <div className="div-persons">
                    {this.state.persons.map((person, index) => {
                        return <Person 
                                click={() => this.deletePersonHandler(index)}
                                name={person.name} 
                                age={person.age} 
                                key={person.id}
                                changed={(e) => this.nameChangedHandler(e, person.id)}/>
                    })}
                </div>
            );
            style.backgroundColor ='red';
            style[':hover']={
                backgroundColor:'salmon',
                color:'black',
            }
        }
        
        const classes= [];
        
        if (this.state.persons.length <= 2){
            classes.push('red')
            console.log(classes)
        }
        
        if (this.state.persons.length <= 1){
            classes.push('blod')
        }

       return (
           <StyleRoot>
                <div className="App">
                    <Header />
                    <Appi />
                    <p className={classes.join(' ')}> This is really working!</p>
                    <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        ); 
    }
}

export default Radium(App); 