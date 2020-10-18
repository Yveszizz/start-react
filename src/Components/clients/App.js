import React from 'react';
import './App.css';
import Client from './Clients';
import ClientForm from './ClientForm'

 

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
        const index = clients.findIndex((client) => client.id === id)
        clients.splice(index,1);
        
        this.setState({clients: clients});
    }
    
    handleAdd = client => {
        const clients = this.state.clients.slice();
        clients.push(client);
        
        this.setState({clients: clients});
        
        
    }

    render(){
        return (
        <div className="liste-clients">
            <h1>Liste des clients</h1> 
            <ul>
                {this.state.clients.map(client =>( 
                <Client details={client} onDelete={this.handleDelete} />
            ))}
            </ul>
            <ClientForm onClientAdd={this.handleAdd}/>
        </div>
            );
    }
}
 
export default Appi;