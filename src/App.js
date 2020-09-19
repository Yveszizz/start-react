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
        ]
    }

switchNameHandler = () => {
    this.setState({
        persons: [
            {name:'Max', age:'28'},
            {name:'Manu', age:'29'},
            {name:'Stephanie', age:'29'}
        ]})
}

  render() {
    return (
      <div className="App">
        <Appo />
        <Appi />
        <button onClick={this.switchNameHandler}>Switch</button>
        <div className="div-persons">
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I love soccer</Person>
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

  /*<React.StrictMode>
    <App />
    <Appi />
    <Person name="Max" />
    <Person name="Manu" />
    <Person name="Stephanie" >I love soccer</Person>
  </React.StrictMode>*/