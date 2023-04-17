import {ImageCDN} from '../config'

// function RestrauntCard(props){    destructring 

// function RestrauntCard({restaurant}){    destructuring
    
function RestrauntCard({cloudinaryImageId,name,cuisines,lastMileTravelString}){
    //console.log(props);
    return(
        <div className="w-56 h-80 p-2 m-2 shadow-lg hover:shadow-2xl bg-amber-100">
            <img src={ImageCDN+
        cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestrauntCard;