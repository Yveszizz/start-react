import React, {Component} from 'react';

function Client (props) {
   
    const details = props.details;
    const onDelete = props.onDelete;

    return  <li>
                {details.nom} <button onClick= {()=>onDelete(details.id)}>X</button>
            </li> 
    
}

export default Client;