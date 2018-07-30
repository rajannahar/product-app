import React from 'react';
import {Row, Col, Card} from 'react-materialize';

const Products = props => (
    <Row>
        {props.filterInput.length===0
            ? props.products.map(product => 
                <Col l={4} m={6} s={12} key={product.id}>
                    <Card>
                        <div className="card-image">
                            <img src={product.images[400].src} 
                                alt={product.description} 
                                style={{height: "200px"}} />
    
                            <span className="card-title"
                                style={{"textShadow": "2px 2px 5px #353c42"}}>
                                {product.title}
                            </span>
                        </div>
                    </Card>
                </Col>
            )

            : props.products.map(product => 
                product.title.toLowerCase().includes(props.filterInput.toLowerCase()) || product.description.toLowerCase().includes(props.filterInput.toLowerCase())
                ? <Col l={4} m={6} s={12} key={product.id}>
                    <Card>
                        <div className="card-image">
                            <img src={product.images[400].src} 
                                alt={product.description} 
                                style={{height: "200px"}} />

                            <span className="card-title"
                                style={{"textShadow": "2px 2px 5px #353c42"}}>
                                {product.title}
                            </span>
                        </div>
                    </Card>
                </Col>
            : []
            )
        }
    </Row>

);

export default Products;