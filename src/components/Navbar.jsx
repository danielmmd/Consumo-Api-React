import React from 'react';


export const Navbar = ({brand}) => {

  return(
    <nav className="navbar navbar-dark bg-danger" >
        <div className='container'>
        <a className="navbar-brand  text-uppercase " href="/">{brand}</a>
        </div>
    </nav>
    )
};

