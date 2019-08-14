import React from 'react';


const Filter = (props) => (
    <input type="text" 
            name="filter" 
            placeholder="filter the fruit... "
            value={props.value}
            onChange={props.onChange} />
) 

export default Filter;