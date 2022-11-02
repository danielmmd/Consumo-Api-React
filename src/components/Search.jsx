import React from 'react'
import { useState } from 'react'

export const Search = ({texto, settexto}) => {
  
  

  const handlOnchange = ({target}) =>{

    settexto(target.value)
  }


  const handlSubmit = (e) =>{

    e.preventDefault();

    console.log(texto)
  }
  
    return (
        <div className='col mb-4'>
              <form onSubmit={handlSubmit}> 
        
                <input className='form-control'   
                type="text"
                name='buscar' 
                placeholder="Nombre del personaje..." 
                value={texto} 
                onChange={handlOnchange}
                />
                
            </form>
        
        </div>
      
  )     
}
