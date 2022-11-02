import React from 'react';

export const Character = ({character}) =>{

    if(character.length === 0) return (<p>No hay Coincidencias</p>)
    

    return (
        <div className='row'>
            {character.map((item, index) => (
                
                <div key={index} className='col mb-4'> 
                    <div className='card' style={{minWidth: "200px"}}>
                        <img src={item.image} alt=''/>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr></hr>
                            <p><b>Location: </b> {item.location.name}</p>
                            <p><b>Especie: </b> {item.species}</p>
                            <p><b>Estatus: </b> {item.status}</p>
                            <p><b>Gender: </b> {item.gender}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
           
};