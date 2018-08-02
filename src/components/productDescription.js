import React from 'react';

const ProductDescription = props => (
    <span style={{"display":"block", "margin":"0 0 0 10px"}}>
        {props.productDescription}
    </span>
);

export default ProductDescription;