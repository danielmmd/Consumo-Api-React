import {Navbar} from './components/Navbar';
import React, {useEffect, useState} from 'react';
import {Character} from './components/Character';
import {Pagination} from './components/Pagination';
import { Search } from './components/Search';

export const App = () => {

  const [character, setcharacter] = useState([]);

  const [info, setinfo] = useState({});

  const [texto, settexto] = useState('')
  
  const initialurl = 'https://rickandmortyapi.com/api/character';

  const personajesFiltrados = character.filter(characte => characte.name.toLocaleLowerCase().includes(texto.toLocaleLowerCase()))

  const FetchCharacter = (url) =>{
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setcharacter(data.results)
        setinfo(data.info)
        console.log(character)
      })
     
      .catch(error => console.log(error))
  };

  const onPrivious = () =>{
  
    FetchCharacter(info.prev);

  }

  const onNext = () =>{

    FetchCharacter(info.next);
  }


  useEffect(() => {
    FetchCharacter(initialurl);
  }, [])
  
  return (
    <>
      <Navbar brand = "Rick and morty app"/>
      <div className='container mt-5' >
      <Search texto ={texto} settexto={settexto}/>
      <Pagination prev={info.prev} next={info.next} onPrivious={onPrivious} onNext={onNext}/>
      <Character character={personajesFiltrados}/>
      <Pagination prev={info.prev} next={info.next} onPrivious={onPrivious} onNext={onNext}/>
      </div>
    </>
  );
  
};

