import React from 'react';
import ProductItem from './productItem';

class Products extends React.Component {
    
    componentDidMount() {
        this.setState({ showDescription: false })
    }

    render() {

        let selectedCategoryCheck = this.props.selectedCategory.length === 0;
        let textMatchTitleDescription = this.props.products
            .filter(filteredProduct => 
                filteredProduct.title.toLowerCase().includes(this.props.filterInput.toLowerCase()) 
                || 
                filteredProduct.description.toLowerCase().includes(this.props.filterInput.toLowerCase())
            );
        
        let cateogryAndTextFiltered;
        selectedCategoryCheck
            ? cateogryAndTextFiltered=textMatchTitleDescription.map(product => 
                <ProductItem key={product.id} product={product} />
            )
            : cateogryAndTextFiltered=textMatchTitleDescription.map(product => 
                product.categories[0].title===this.props.selectedCategory
                    ? <ProductItem key={product.id} product={product} />
                    : []
                )

        return(
            <ul className="products-list"
            style={{"marginLeft":"20px"}}>
                {cateogryAndTextFiltered}
            </ul>
        );
    }
}

export default Products;