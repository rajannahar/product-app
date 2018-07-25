import React from 'react';
import {Row, Col, Card} from 'react-materialize';

const Products = props => (
    <Row>
        {
            // console.log("Products: ",props.products)
            props.products.length > 0
                ? props.products.map(product => 
                    // <CollectionItem key={product.id}>{product.title}</CollectionItem>
                    <Col l={4} m={6} s={12} key={product.id}>
                        <Card>
                            <div className="card-image">
                                <img src={product.images[400].src} 
                                    alt={product.description} 
                                    style={{height: "200px"}} />

                                <span className="card-title"
                                    style={{"text-shadow": "2px 2px 5px #353c42"}}>
                                    {product.title}
                                </span>

                            </div>
                            
                            {/* <div className="card-content">
                                <p><b>Description: </b>{product.description}</p>
                            </div> */}
                        </Card>
                    </Col>
                )
                : <h1>Loading</h1>
        }
    </Row>

);

export default Products;