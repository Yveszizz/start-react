import React, {useEffect} from 'react';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
    });
    /*const style = {
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
    style.backgroundColor ='red';
            style[':hover']={
                backgroundColor:'salmon',
                color:'black',
            }*/

    const assignedClasses = [];
    let btnClass ='';

    if (props.showPersons){
        
    }

    if (props.persons.length <= 2){
        assignedClasses.push('red')
    }
    
    if (props.persons.length <= 1){
        assignedClasses.push('blod')
    }

    return (
        <div>
            <p className={assignedClasses.join(' ')}> This is really working!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons</button> {/* style={style} */}
        </div>
    );
};

export default Cockpit;