// src/components/Column.js  
import React from 'react';  
import Card from './Card';  

const Column = ({ title, tickets }) => {  
    return (  
        <div className="column">  
            <h2>{title} ({tickets.length})</h2>  
            {tickets.map(ticket => (  
                <Card key={ticket.id} ticket={ticket} />  
            ))}  
        </div>  
    );  
};  

export default Column;