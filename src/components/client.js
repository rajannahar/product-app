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

        // window.location.href.includes("localhost")
        // ? console.log("localhost")
        // : console.log("not localhost")

        // let dataSource;

        // window.location.href.includes("localhost")
        // ? dataSource = '/api/' //development backend server url
        // : dataSource = 'https://travel-app-frontend-rn.herokuapp.com/api/' //heroku backend server url
        
        // fetch(dataSource)
        // .then(res => res.json()
        // .then(data => {
        //     const hotelData = data.Establishments;
        //     this.setState({
        //         ...this.state,
        //         hotels:hotelData
        //     });

        //     // copy of the original data from fetch
        //     initialState = {...this.state};
        // }));

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

    /* handleSort = (event) => {

        this.setState({
            sortBy: event.target.value
        });
        let newObj = [...this.state.hotels];
        
        switch(this.state.sortBy) {
            case("1"):
                newObj.sort((a, b) => a.Distance - b.Distance);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            case("2"):
                newObj.sort((a, b) => b.Distance - a.Distance);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            case("3"):
                newObj.sort((a, b) => a.Stars - b.Stars);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
                
            case("4"):
                newObj.sort((a, b) => b.Stars - a.Stars);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            case("5"):
                newObj.sort((a, b) => a.MinCost - b.MinCost);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("6"):
                newObj.sort((a, b) => b.MinCost - a.MinCost);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("7"):
                newObj.sort((a, b) => a.UserRating - b.UserRating);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("8"):
                newObj.sort((a, b) => b.UserRating - a.UserRating);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            default:
                this.setState({
                    ...this.state,
                    hotels: initialState.hotels
                });
        }

    }

    resetData = () => {
        this.setState({
            filterName: ''
        });
        document.querySelector(".filterName").value="";
    }

    handleFilterName = (event) => {
        let nameInput = event.target.value;
        this.setState({
            filterName: nameInput
        });
                        
    };

    handleFilterStars = (event) => {
        let starInput = parseInt(document.querySelector(".filterStars input").value, 10);
        console.log("starInput: ",starInput, typeof(starInput));
        this.setState({
            filterStars: starInput
        })
    }; */


    handleFilterClick = event => {
        let clickedCategoryValue = event.target.value;
        this.setState({
            selectedCategory: clickedCategoryValue
        });
        // this.addClass("test");
    }


    handleInput = event => {
        let inputData = event.target.value;
        this.setState({
            filterInput: inputData
        });
                        
    };

    
  render() {

   // if (this.state.hotels.length) {
        console.log("load: ", this.state);

        /* const {hotels} = this.state;

        let hotelFilterStars = [];
        let hotelsToRender = [];

        let filterStarsLength = this.state.filterStars.length !== 0;        
        
        filterStarsLength   
            ? hotels.filter( hotel => {
                hotel.Stars === this.state.filterStars 
                    ? hotelFilterStars.push(hotel)
                    : []
            })
            : []
            
        console.log("hotelFilterStars: ",hotelFilterStars.length, hotelFilterStars);

        
        hotelFilterStars.length > 0
            ? hotelsToRender = hotelFilterStars.filter(hotel => 
                hotel.Name.toLowerCase().includes(
                    this.state.filterName.toLowerCase())
            )
            : hotelsToRender = hotels.filter(hotel => 
                hotel.Name.toLowerCase().includes(
                    this.state.filterName.toLowerCase())
            ) */


        return (
            
            <div className="client">

                {this.state.categories.length > 0 && this.state.products.length > 0 
                    ? <div className="client">
                        <Row>
                            <CategoriesFilter categories={this.state.categories} handleFilterClick={this.handleFilterClick} />
                        </Row>

                        <InputFilter handleInput={this.handleInput} />
                        <Products products={this.state.products} filterInput={this.state.filterInput} />
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