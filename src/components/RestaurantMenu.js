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

   

    
    
    return (!restaurant) ? <Shimmer /> : (
      
            <div className="menu">
            <div>
                <h1>Restaurant id: {restaurant[0].card.card.info.id}</h1>
                <h2>Name: {restaurant[0].card.card.info.name}</h2>
                <img alt="menu" src={ImageCDN + restaurant[0].card.card.info.cloudinaryImageId} />
                <h3>Area: {restaurant[0].card.card.info.areaName}</h3>
                <h3>City: {restaurant[0].card.card.info.city}</h3>
                <h4>AvgRating: {restaurant[0].card.card.info.avgRating}</h4>
                <h4>costForTwo: {restaurant[0].card.card.info.costForTwoMessage}</h4>
                <h4>Cuisines:
                    <ul>
                        {restaurant[0].card.card.info.cuisines.map((cs, index) => (
                            <li key={index}>{cs}</li>
                        ))}
                    </ul>
                </h4>
                <h5>Total Ratings: {restaurant[0].card.card.info.totalRatingsString}</h5>
                <h5>Address : {restaurant[0].card.card.info.labels[1].message}</h5>
                {/* <h5>Menu: {restaurant[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((rd,index) => (
                    <li key={index}> {rd.card.info.name}</li>
                ))}
                </h5>     */}

            </div>
            <div>
                <h3>Menu:</h3>
                <ul>{Object.values(restaurant[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards).map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}</ul>
            </div>

        </div>
        )
    
}

export default RestaurantMenu;
