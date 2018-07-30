import React from 'react';
import {Button} from 'react-materialize';

const CategoriesFilter = props => (
    
        props.categories.map(category => 

            category.hidden===false
                ? <Button 
                    key={category.id}
                    style={{"margin":"10px"}}
                    onClick={props.handleFilterClick}
                    value={category.title}>
                    {category.title}
                </Button>
                : []
        ) 

);

export default CategoriesFilter;