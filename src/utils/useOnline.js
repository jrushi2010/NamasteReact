import { useState } from "react";
import { useEffect } from "react";

function useOnline(){

    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{

        const handleOnline = ()=>{
            console.log("event");
            setIsOnline(true);
        }

        const handleOffline = ()=>{
            setIsOnline(false);
        }

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        };

    },[]);

  

    return isOnline;    //return true or false
}

export default useOnline;