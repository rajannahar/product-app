import React from 'react';
import {Row, Col, Input} from 'react-materialize';

const InputFilter = props => (
    <Row>
        <Col s={12} m={6}>  
            <Input className="filterName" 
                placeholder="Filter by name" 
                s={12} 
                m={8} 
                onKeyUp={props.handleInput} />
        </Col>
    </Row>

);

export default InputFilter;