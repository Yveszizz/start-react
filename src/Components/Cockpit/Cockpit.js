import React from 'react';

const cockpit = (props) => {

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

    const assignedClasses= [];
    let btnClass ='';

    if (props.persons.length <= 2){
        assignedClasses.push('red')
    }
    
    if (props.persons.length <= 1){
        assignedClasses.push('blod')
    }

    return (
        <div>
            <p className={assignedClasses.join(' ')}> This is really working!</p>
            <button onClick={props.clicked}>Toggle Persons</button> {/*style={style} */}
        </div>
    );
};


export default cockpit;