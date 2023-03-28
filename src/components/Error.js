import {useRouteError} from "react-router-dom";

function Error(){

    const error = useRouteError();

    console.log(error);

    return(
        <div>
            <h1>Opps...!</h1>
            <h2>Opps...!</h2>
            <h3>Something went wrong</h3>
            <h4>{error.status + " : " + error.statusText}</h4>
        </div>
    )
}

export default Error;