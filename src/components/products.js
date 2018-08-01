import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize';

class Products extends React.Component {
    
    render() {

        let selectedCategoryCheck = this.props.selectedCategory.length === 0;

        let textMatchTitleDescription = this.props.products
            .filter(filteredProduct => 
                filteredProduct.title.toLowerCase().includes(this.props.filterInput.toLowerCase()) 
                || 
                filteredProduct.description.toLowerCase().includes(this.props.filterInput.toLowerCase())
            );
        
        let cateogryAndTextFiltered;

        // selectedCategoryCheck
        //     ? cateogryAndTextFiltered=textMatchTitleDescription.map(product => 
        //         <Col l={4} m={6} s={12} key={product.id} className="card-container" >
        //             <Card header={<CardTitle reveal image={product.images[400].src} waves='light'/>}
        //                 title={product.title}
        //                 reveal={<p>{product.description}</p>}>
        //             </Card>

        //         </Col>
        //     )
        //     : cateogryAndTextFiltered=textMatchTitleDescription.map(product => 
        //         product.categories[0].title===this.props.selectedCategory
        //         ? <Col l={4} m={6} s={12} key={product.id} className="card-container">
        //             <Card header={<CardTitle reveal image={product.images[400].src} waves='light'/>}
        //                 title={product.title}
        //                 reveal={<p>{product.description}</p>}>
        //             </Card>

        //         </Col>
        //         : []
        //     )

        selectedCategoryCheck
            ? cateogryAndTextFiltered=textMatchTitleDescription.map(product => 
                <li>
                    <p>{product.title}</p>
                    <p style={{"display":"none"}}>{product.description}</p>
                </li>
            )
            : cateogryAndTextFiltered=textMatchTitleDescription.map(product => 
                product.categories[0].title===this.props.selectedCategory
                ? <li>
                    <p>{product.title}</p>
                    <p style={{"display":"none"}}>{product.description}</p>
                </li>
                : []
            )


        return(
            <ul>{cateogryAndTextFiltered}</ul>
        );
    }
}

export default Products;