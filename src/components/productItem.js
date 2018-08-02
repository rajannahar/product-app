import React from 'react';
import ProductDescription from './productDescription';

class ProductItem extends React.Component {

    componentWillMount() {
        this.setState({ showDescription: false })
    }

    productClick = event => {
        event.preventDefault();
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    
    render() {
        
        const buttonStyles = {
            "display":"block", 
            "margin":"10px 0 0 10px",
            "text-decoration":"underline",
            "cursor":"pointer"
        }

        const buttonStylesActive = {
            ...buttonStyles,
            "font-weight":"bold"
        }

        return (
            <li style={{"display":"block", "margin":"10px 0 20px 0"}}>
                <p
                    className={this.state.showDescription ? "product-button active" : "product-button"}  
                    onClick={this.productClick} 
                    style={this.state.showDescription ? buttonStylesActive : buttonStyles} >
                        {this.props.product.title}
                </p>
        
                {
                    this.state.showDescription
                    ? <ProductDescription productDescription={this.props.product.description} />
                    : []
                }
            </li>
        );
    }

};

export default ProductItem;