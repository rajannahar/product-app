import React, { Component } from 'react';
import Products from './products';


class Client extends Component {

    /* constructor - deprecated with React 16 */
    // constructor() {
    //     super();
    //     this.state = {
    //         hotels: [], 
    //         sortBy: '',
    //         filterName: '',
    //         filterStars: ''
    //     }
    // }

    state = {
        categories: [],
        products: [], 
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

    
  render() {

   // if (this.state.hotels.length) {
        console.log("load: ", this.state.products);

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

                <Products products={this.state.products} />
                
                {/* {this.state.hotels.length 
                    ? <div className="container">

                            <Row>
                                <SortBy handleSort={this.handleSort} />
                            </Row>

                            <Row>
                                <FilterName handleFilterName={this.handleFilterName} />
                            </Row>

                            <Row>
                                <FilterStars handleFilterStars={this.handleFilterStars}/>
                                <FilterUserRatings />
                                <FilterMinCost />
                            </Row>

                            <Row>
                                <ResetButton resetData={this.resetData} />
                            </Row>

                            <Row>
                                    
                                { hotelsToRender.map(hotel =>
                                
                                    <Col m={6} s={12} key={hotel.EstablishmentId}>
                                        <Card>
                                            <div className="card-image">
                                                <img src={hotel.ImageUrl} alt="" />
                                                <span className="card-title">{hotel.Name}</span>
                                            </div>
                                            <div className="card-content">
                                                <p><b>Type: </b>{hotel.EstablishmentType}</p>
                                                <p><b>Location: </b>{hotel.Location}</p>
                                                <p><b>Minimum cost: </b>£{hotel.MinCost}</p>
                                                <p><b>Stars: </b>{hotel.Stars}</p>
                                                <p><b>User rating: </b>{hotel.UserRating}</p>
                                                <p><b>User rating title: </b>{hotel.UserRatingTitle}</p>
                                                <p><b>User rating count: </b>{hotel.UserRatingCount}</p>
                                                <p><b>Distance: </b>{parseFloat(hotel.Distance).toFixed(2)}</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    
                                )}

                            </Row>
                        </div>

                    :  <div className="container">
                            <Row>
                                <Col s={12}>
                                    <Preloader flashing size='big'/>
                                </Col>
                            </Row> 
                        </div>
                    } */}

            </div>

        );

    }
}

export default Client;