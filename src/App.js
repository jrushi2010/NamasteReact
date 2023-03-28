import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import React from 'react';
import {createBrowserRouter,Outlet} from 'react-router-dom';
import About from './components/AboutUs';
import Error from './components/Error';
import Contact from './components/ContactUs';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

/**
 
  Header
      - logo
      - nav iteams(right side)
      - cart
  body
      - search bar
      - restaurantlist
        - restaurantcard
          - image
          - name
          - rating
          - cusines
  footer
      - links
      - copyright
 
 */

function App() {
  return (
    <React.Fragment>
      <HeaderComponent/>
        <Outlet/>
      <FooterComponent/>
    </React.Fragment>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<BodyComponent/>
      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ]
  },
]);
export default App;
