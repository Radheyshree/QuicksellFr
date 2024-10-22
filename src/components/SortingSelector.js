// src/components/SortingSelector.js  
import React from 'react';  

const SortingSelector = ({ setSortBy }) => {  
    return (  
        <div className="selector">  
            <label>Sort By:</label>  
            <select onChange={(e) => setSortBy(e.target.value)}>  
                <option value="priority">Priority</option>  
                <option value="date">Date</option>  
            </select>  
        </div>  
    );  
};  

export default SortingSelector;