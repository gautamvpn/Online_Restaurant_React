import { useState } from "react";

const User = (props) =>{
    const[count,setCount] = useState(0);
    const[count1,setCount1] = useState(1);
    return(
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{count1}</h1>
            <h2>Name:{props.name}</h2>
            <h2>Location: Dehradun</h2>
            <h2>Contact: Gautamvpn@gmail.com</h2>
        </div>
    )
}

export default User;