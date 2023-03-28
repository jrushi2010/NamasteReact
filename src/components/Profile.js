import { useState } from 'react';

function Profile(props){
    const [count,setCount] = useState(0);

    return(
        <div>
                    <h1>Profile component</h1>
                    <h2>Name: {props.name}</h2>
                    <h3>Count: {count}</h3>
        </div>
    )
}

export default Profile;