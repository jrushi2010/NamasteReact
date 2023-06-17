import { useState } from 'react';
import { useEffect } from 'react';
import { Fetch_Menu } from '../config';

function useRestaurant(id) {
    const [restaurant, setRestaurant] = useState(null);

    //get data from api
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(Fetch_Menu + id);
        const json = await data.json();
        //console.log(json.data);
        //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);
        setRestaurant(json.data.cards);
    }

    //return restaurant data
    return restaurant;
}

export default useRestaurant;