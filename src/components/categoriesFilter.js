import React from 'react';
import {Row, Button} from 'react-materialize';

const CategoriesFilter = props => (
    <Row>
        {props.categories.map(category => 

            category.hidden===false
                ? <Button 
                    key={category.id}
                    style={{"margin":"10px"}} >
                    {category.title}    
                </Button>
                : []
        )}
    </Row>

);

export default CategoriesFilter;