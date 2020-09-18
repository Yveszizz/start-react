import React from 'react';
import './App.css';

 

class Appi extends React.Component {
    render(){
    return (
    <div className="liste-clients">
        <h1>Liste des clients</h1>
        <form>
        <input type="text"/><button>Valider</button>
        </form>
    </div>
        );
    }
}
 
export default Appi;