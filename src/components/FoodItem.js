import {ImageCDN} from '../config'

// function RestrauntCard(props){    destructring 

// function RestrauntCard({restaurant}){    destructuring
    
function FoodItem({name,category,imageId,price,description}){
    //console.log(props);
    return(
        <div className="group w-56 h-80 p-2 m-2 hover:border-2 hover:shadow-lg">
            <img src={ImageCDN+
        imageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{category}</h3>
            <h4>Ruppes: {price/100}</h4>
            <h5>Description:{description}</h5>
        </div>
    )
}

export default FoodItem;