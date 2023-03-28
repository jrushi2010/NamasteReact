import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageCDN } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from './../utils/useRestaurant';

function RestaurantMenu() {

    const { id } = useParams();

    //const [restaurant, setRestaurant] = useState(null);

    const restaurant = useRestaurant(id);

    //const param = useParams();
    //const {id} = param;
    //console.log(param);

  

    return (!restaurant) ? <Shimmer/> : (
        <div className="menu">
            <div>
                <h1>Restaurant id: {restaurant.id}</h1>
                <h2>Name: {restaurant.name}</h2>
                <img src={ImageCDN + restaurant.cloudinaryImageId} />
                <h3>Area: {restaurant.area}</h3>
                <h3>City: {restaurant.city}</h3>
                <h4>AvgRating: {restaurant.avgRating}</h4>
                <h4>costForTwo: {restaurant.costForTwoMsg}</h4>
            </div>
            <div>
                <h1>Menu:</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (<li key={item.id}>{item.name}</li>))}
                </ul>
            </div>

        </div>
    )
}

export default RestaurantMenu;