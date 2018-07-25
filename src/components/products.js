import React from 'react';
import {Collection, CollectionItem} from 'react-materialize';

const Products = props => (
    
    // <Input className="filterStars" s={12} m={4} type='select' defaultValue='' onChange={props.handleFilterStars} >
    //     <option key="" value="">Filter Stars:</option>
    //     <option key="0" value="0">0 Star</option>
    //     <option key="1" value="1">1 Star</option>
    //     <option key="2" value="2">2 Stars</option>
    //     <option key="3" value="3">3 Stars</option>
    //     <option key="4" value="4">4 Stars</option>
    //     <option key="5" value="5">5 Stars</option>
    // </Input>

    // <Collection>
    //     {
    //         props.products.length > 0
    //             ? props.products.map(product => 
    //                 <CollectionItem key={product.id}>{product.title}</CollectionItem>
    //             )
    //             : <h1>Loading</h1>
    //     }
    // </Collection>

    <div>
        {
            // console.log("Products: ",props.products)
            props.products.length > 0
                ? props.products.map(product => 
                    <CollectionItem key={product.id}>{product.title}</CollectionItem>
                )
                : <h1>Loading</h1>
        }
    </div>

);

export default Products;