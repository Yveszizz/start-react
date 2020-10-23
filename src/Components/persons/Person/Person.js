import React, {Component} from 'react';
import './Person.css';
import Radium, {StyleRoot} from 'radium';

class Person extends Component {
    render () {
        console.log('[Person.js] rendering ...')
        const style = {
            '@media (min-width: 500px)':{
                width: '450px'
            }
        }
        return (
            <div className="person" style={style}>
                <h1 onClick={this.props.click} >{this.props.name}</h1>
                <p>Your age : {this.props.age} </p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}
export default Radium(Person);