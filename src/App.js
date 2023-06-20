import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import React,{ lazy, Suspense } from 'react';
import {createBrowserRouter,Outlet} from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/ContactUs';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
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

      const Instamart = lazy(() => import("./components/Instamart"));
      const About = lazy(() => import("./components/AboutUs"));
      
      //Upon on demand loading --> upon render -> suspend loading

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
        element:(
          <Suspense fallback={<h1>loading....</h1>}>
            <About />
          </Suspense>
        ),
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
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ]
  },
]);
export default App;
