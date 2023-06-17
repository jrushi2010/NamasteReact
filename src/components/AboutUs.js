import { Outlet } from "react-router";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

function About(){
    return(
        <div>
            <h1>About us page</h1>
            <ProfileClass name={"Akshay"}/>
        </div>
    )
}

export default About;