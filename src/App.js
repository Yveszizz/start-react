import React, { Component } from 'react';
import './App.css';
import Appo from './react-logo/App.js';
import Appi from './clients/App.js';
import Person from './personnes/App.js'


class App extends Component {
   state = {
        persons: [
            {name:'Max', age:'28'},
            {name:'Manu', age:'29'},
            {name:'Stephanie', age:'26'}
        ],
        otherState: "some other value",
        showPersons: false
    };
    
    
   switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age:'28'},
                {name:'Manu', age:'29'},
                {name:'Stephanie', age:'29'}
            ]})
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
    
    render(){
        
       return (
          <div className="App">
            <Appo />
            <Appi />
            <button onClick={this.togglePersonsHandler}>Switch</button>
            {
            this.state.showPersons ?
                <div className="div-persons">
                    <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age} />
                    <Person 
                        changed={this.nameChangedHandler}
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age} />
                    <Person
                        click={this.switchNameHandler.bind(this,'Yvesziz')}
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age}>I love soccer</Person>
                </div> : null
            }

          </div>
        ); 
    }
}

export default App; 