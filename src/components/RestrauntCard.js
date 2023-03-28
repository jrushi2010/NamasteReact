import {ImageCDN} from '../config'

// function RestrauntCard(props){    destructring 

// function RestrauntCard({restaurant}){    destructuring
    
function RestrauntCard({cloudinaryImageId,name,cuisines,lastMileTravelString}){
    //console.log(props);
    return(
        <div className="card">
            <img src={ImageCDN+
        cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestrauntCard;