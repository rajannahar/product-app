# React Application

#### This is a React application bootstrapped using create-react-app. It presents you with data from the Goustp API to render products which can be filtered via cateogry buttons or free input text which will match either the product title or product description.


In order to start up the application, navigate to the root of the folder and run `npm install` to install the dependencies from the package.json file.
Then run `npm start` to boot up the localhost server and run the application.
The application will load here - http://localhost:3000

## Libraries
- React-Materialize - https://react-materialize.github.io/#/
- Material CSS has been added to the project - https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css
- Sass components for the application - `/src/sass/components/` - in order to build this stylesheet, run `npm run build-css` in the terminal
- React-Slick has been added to render the product cateogories in a carousel, similar to that on the Gousto website
- Slick Carousel stylesheets have been used to work in conjunction with react-slick

## Architecture
- App.js - this is the outermost shell component which houses the Router
- router.js - this is a component which uses react-router to add BrowserRouter, Switch and Routes
- client.js - this is the main, parent component which features the below:
    - Declaring the initial state
    - Making two API calls (categories, products)
    - There are event handlers developed here (category click filter, input text filter)
    - Rendering of the child components in a certain format, using react-materialize
- categoriesFilter.js - react-slick is used to provide carousel functionality which contains the various product cateogories
- inputFilter.js 
    - an input field where the user can enter text to search
    - the text entered will be matched up to check if it is included in the product title and/or product description in a case insensitive manner
- products.js - a component to house the filtering of category/input text using ES6 map and filter functions
- productItem.js 
    - a component to render the product title which can be clicked to toggle the corresponding product description
    - multiple products can be clicked to display many descriptions
    - the product title will be bold once clicked to reveal the product description
- productDescription.js - a component to toggle the product description, only once the product title has been clicked

## CORS
I've used https://cors.io/? to handle the CORS restriction (this can be seen in the client.js file, apiData function). This eliminates the need to install the Google Chrome extension to workaround the cross-origin problem.

## Future development
- It would be great to improve the user experience with a more intuitative interface and use the rest of the data from the API calls, such as images.
- Using react-materialize, it would be interesting to see a layout adopting the Cards which can show the image and description with a clean interaction and presentation aspect - https://react-materialize.github.io/#/cards
- Downside: react-materialize is dependant on jQuery which adds to technical debt for the sake of a handful of interactions which can be developed without using an overkill library
- Redux - I've opted to use the react state for state management. However, in the case of the dataset being very large or upscaling the application to add more functionality, it would be better to use Redux to handle the data and use a store for this.
