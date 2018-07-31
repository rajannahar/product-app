import React from 'react';
import {Button} from 'react-materialize';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
            }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
};

const CategoriesFilter = props => (

    <Slider {...settings}>
        {props.categories.map(category =>
            category.hidden===false
            ? <Button 
                key={category.id}
                onClick={props.handleFilterClick}
                value={category.title}
                className={category.title===props.selectedCategory 
                    ? "active category-button" 
                    : "category-button"}>
                {category.title}
            </Button>
            : []
        )}
    </Slider>

);

export default CategoriesFilter;