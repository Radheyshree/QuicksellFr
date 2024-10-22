// src/components/Card.js  
import React from 'react';  

const Card = ({ ticket }) => {  
    return (  
        <div className="card">  
            <h3>{ticket.title}</h3>  
            <p>{ticket.description}</p>  
            <span className="priority">{ticket.priority}</span>  
        </div>  
    );  
};  

export default Card;