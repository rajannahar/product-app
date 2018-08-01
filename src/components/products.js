import React from 'react';
import {Row, Col, Card} from 'react-materialize';

class Products extends React.Component {
    
    render() {
        let filterInputRender

        // filterInputRender = this.props.filterInput.length === 0
        //     ? this.props.products.map(product => 
        //         <Col l={4} m={6} s={12} key={product.id}>
        //             <Card>
        //                 <div className="card-image">
        //                     <img src={product.images[400].src} 
        //                         alt={product.description} 
        //                         style={{height: "200px"}} />
    
        //                     <span className="card-title"
        //                         style={{"textShadow": "2px 2px 5px #353c42"}}>
        //                         {product.title} - {product.categories[0].title}
        //                     </span>
        //                 </div>
        //             </Card>
        //         </Col>
        //     )

        //     : this.props.products.map(product => 
        //         product.title.toLowerCase().includes(this.props.filterInput.toLowerCase()) || product.description.toLowerCase().includes(this.props.filterInput.toLowerCase())
        //         ? <Col l={4} m={6} s={12} key={product.id}>
        //             <Card>
        //                 <div className="card-image">
        //                     <img src={product.images[400].src} 
        //                         alt={product.description} 
        //                         style={{height: "200px"}} />

        //                     <span className="card-title"
        //                         style={{"textShadow": "2px 2px 5px #353c42"}}>
        //                         {product.title} - {product.categories[0].title}
        //                     </span>
        //                 </div>
        //             </Card>
        //         </Col>
        //     : []
        //     )

            let selectedCategoryCheck = this.props.selectedCategory.length === 0;
            let categoryClickFilter;

            // selectedCategoryCheck
            //     ? categoryClickFilter=filterInputRender
            //     : categoryClickFilter=this.props.products.map(product => 
            //         product.categories[0].title===this.props.selectedCategory
            //         ? <Col l={4} m={6} s={12} key={product.id}>
            //             <Card>
            //                 <div className="card-image">
            //                     <img src={product.images[400].src} 
            //                         alt={product.description} 
            //                         style={{height: "200px"}} />

            //                     <span className="card-title"
            //                         style={{"textShadow": "2px 2px 5px #353c42"}}>
            //                         {product.title} - {product.categories[0].title}
            //                     </span>
            //                 </div>
            //             </Card>
            //         </Col>
            //         : []
            //     )


            selectedCategoryCheck
                ? categoryClickFilter=this.props.filterInput.length === 0
                    ? this.props.products.map(product => 
                        product.title.toLowerCase().includes(this.props.filterInput.toLowerCase()) || product.description.toLowerCase().includes(this.props.filterInput.toLowerCase())
                            ? <Col l={4} m={6} s={12} key={product.id}>
                                <Card>
                                    <div className="card-image">
                                        <img src={product.images[400].src} 
                                            alt={product.description} 
                                            style={{height: "200px"}} />
            
                                        <span className="card-title"
                                            style={{"textShadow": "2px 2px 5px #353c42"}}>
                                            {product.title} - {product.categories[0].title}
                                        </span>
                                    </div>
                                </Card>
                            </Col>
                            : []
                    )
        
                    : this.props.products.map(product => 
                        product.title.toLowerCase().includes(this.props.filterInput.toLowerCase()) || product.description.toLowerCase().includes(this.props.filterInput.toLowerCase())
                            ? <Col l={4} m={6} s={12} key={product.id}>
                                <Card>
                                    <div className="card-image">
                                        <img src={product.images[400].src} 
                                            alt={product.description} 
                                            style={{height: "200px"}} />
            
                                        <span className="card-title"
                                            style={{"textShadow": "2px 2px 5px #353c42"}}>
                                            {product.title} - {product.categories[0].title}
                                        </span>
                                    </div>
                                </Card>
                            </Col>
                            : []
                    
                )
                : this.props.products.map(product => 
                    product.categories[0].title===this.props.selectedCategory
                    ? console.log("true: ",product)
                    : console.log("false: ",product)
                // : categoryClickFilter=this.props.products.map(product => 
                //     product.categories[0].title===this.props.selectedCategory
                //     ? <Col l={4} m={6} s={12} key={product.id}>
                //         <Card>
                //             <div className="card-image">
                //                 <img src={product.images[400].src} 
                //                     alt={product.description} 
                //                     style={{height: "200px"}} />

                //                 <span className="card-title"
                //                     style={{"textShadow": "2px 2px 5px #353c42"}}>
                //                     {product.title} - {product.categories[0].title}
                //                 </span>
                //             </div>
                //         </Card>
                //     </Col>
                //     : []
                )


        return(
            <Row>{categoryClickFilter}</Row>
        );
    }
}

export default Products;