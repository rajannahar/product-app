import React from 'react';
import {Row, Input} from 'react-materialize';

const InputFilter = props => (
    <Row>    
        <Input className="filterName" placeholder="Filter by name" s={12} m={6} onKeyUp={props.handleInput} />
    </Row>

);

export default InputFilter;