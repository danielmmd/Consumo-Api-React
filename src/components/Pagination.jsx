import React from 'react';

export const Pagination = ({prev, next, onPrivious, onNext}) => {

    const handlePrevious = () =>{
        onPrivious();
    }

    const handleNext = () =>{
        onNext();
    }
    
    return(
    <nav>
        <ul className='pagination justify-content-center'>
            {prev?<li className='page-item'><button type="button" className="btn btn-primary" onClick={handlePrevious}>Previous</button></li>:null}
            {next?<li className='page-item'><button type="button" className="btn btn-warning" onClick={handleNext}>Next</button></li>:null}
        </ul>

    </nav>
);


}