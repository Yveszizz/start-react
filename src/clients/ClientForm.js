import React, {Component} from 'react';

class ClientForm extends Component {
    
    state = {
        nouveauClient: "",
    }

    handleChange = (e) => {
        this.setState({nouveauClient: e.currentTarget.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        const id = new Date().getTime();
        const nom =  this.state.nouveauClient;
        
        this.props.onClientAdd({id,nom});
        
        this.setState({nouveauClient:''})
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.nouveauClient} placeholder="Ajouter client" type="text"/><button>Valider</button>
                </form>
                );
    }
}

export default ClientForm;