import RestrauntCard from './RestrauntCard';
import React, { useEffect, useState } from 'react';
import Shimmer from '../components/Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from './../utils/helper';


function BodyComponent() {

    const [searchText, setSearchText] = useState("");
    const [fileredRestList, setFilteredRestList] = useState([]);
    const [AllRestList, SetAllRestList] = useState([]);

    useEffect(() => {
        // API call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        //optional chaining
        SetAllRestList(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestList(json?.data?.cards[2]?.data?.data?.cards);
    }

    //conditional rendering
    //if restaurant is empty ==> shimmer ui
    //if restaurant has data ==> actual data ui

    //not render component (Early return)
    if (!AllRestList) return null;


    return (AllRestList?.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />

                <button className="search-button"
                    onClick={() => {
                        //need to filter the data
                        const data = filterData(searchText, AllRestList);
                        //update the restaurantlist
                        setFilteredRestList(data);
                    }}
                >Search</button>
                {searchText}
            </div>
            <div className="restaurant-list">
                {/* you have to write logic for no restaurant found */}
                {
                    fileredRestList.map((restaurant) => {
                        return <Link to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}> <RestrauntCard {...restaurant.data}/></Link>
                    })
                }
            </div>
        </>
    )
}

export default BodyComponent;