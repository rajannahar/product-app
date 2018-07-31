import React, { Component } from 'react';
import Products from './products';
import CategoriesFilter from './categoriesFilter';
import InputFilter from './inputFilter';
import {Row, Col, Preloader} from 'react-materialize';


class Client extends Component {
    state = {
        categories: [],
        products: [],
        filterInput: "",
        selectedCategory: ""
    }


    apidata = () => {

        const corsHandler = "https://cors.io/?";
        const categoriesUrl = `${corsHandler}https://api.gousto.co.uk/products/v2.0/categories`;
        const productsUrl = `${corsHandler}https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120`;

        fetch(categoriesUrl)
        .then(res => res.json()
            .then(data => {
                console.log(data);
                data.status = "ok"
                    ? this.setState({
                        ...this.state,
                        categories: data.data
                    })
                    : [];
            })
        )

        fetch(productsUrl)
        .then(res => res.json()
            .then(data => {
                console.log(data);
                data.status = "ok"
                    ? this.setState({
                        ...this.state,
                        products: data.data
                    })
                    : [];
            })
        )

        
    };

    componentDidMount() {
        this.apidata();
    }

    
    handleFilterClick = event => {
        let clickedCategoryValue = event.target.value;
        console.log(clickedCategoryValue);
        this.setState({
            selectedCategory: clickedCategoryValue
        });
    }


    handleInput = event => {
        let inputData = event.target.value;
        this.setState({
            filterInput: inputData
        });
                        
    };

    
  render() {

        console.log("load: ", this.state);
        return (
            <div className="client">
                {this.state.categories.length > 0 && this.state.products.length > 0 
                    ? <div className="client">

                        <Row className="slider-row">
                            <Col s={12}>
                                <CategoriesFilter 
                                    categories={this.state.categories} 
                                    handleFilterClick={this.handleFilterClick} 
                                    selectedCategory={this.state.selectedCategory} />
                            </Col>
                        </Row>

                        <InputFilter handleInput={this.handleInput} />
                        <Products 
                            products={this.state.products} 
                            filterInput={this.state.filterInput} 
                            selectedCategory={this.state.selectedCategory} />
                    </div>
                    : <Row>
                        <Col s={12}>
                            <Preloader flashing size='big'/>
                        </Col>
                    </Row>
                }   
            </div>
        );
    }
}

export default Client;