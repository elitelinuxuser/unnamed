import React from 'react';
import '../styles/Hero.css';

export const Hero = ()=> {
    return(
        <div className="jumbo-container container-fluid">
        
            <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        
        </div>
    )
}