import React from 'react';
import './App.css';

 

class Appi extends React.Component {
    
    state = {
        clients: [
        {id: 1, nom: "Monsieur 1"},
        {id: 2, nom: "Monsieur 2"},
        {id: 3, nom: "Monsieur 3"}
        ],

    };
    
    handleDelete = (id) => {
        const clients = this.state.clients.slice(); // Faire une copie du tableau
        const index = clients.findIndex(function(client){
            return client.id === id
        })
        clients.splice(index,1);
        
        this.setState({clients: clients})
    }

    render(){
    return (
    <div className="liste-clients">
        <h1>Liste des clients</h1> 
        <ul>
            {this.state.clients.map(client =>( 
            <li>
                {client.nom} <button onClick= {()=>this.handleDelete(client.id)} >X</button>
            </li> 
        ))}
        </ul>
        <form>
        <input type="text"/><button>Valider</button>
        </form>
    </div>
        );
    }
}
 
export default Appi;