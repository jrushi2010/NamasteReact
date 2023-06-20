import {ImageCDN} from '../config'

// function RestrauntCard(props){    destructring 

// function RestrauntCard({restaurant}){    destructuring
    
function RestrauntCard({cloudinaryImageId,name,cuisines,lastMileTravelString}){
    //console.log(props);
    return(
        <div className="group w-56 h-80 p-2 m-2 hover:border-2 hover:shadow-lg">
            <img src={ImageCDN+
        cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
            <p className="invisible text-blue-500 text-lg group-hover:visible">Quick View</p>
        </div>
    )
}

export default RestrauntCard;