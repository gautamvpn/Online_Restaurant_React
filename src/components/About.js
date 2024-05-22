import {Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component{

    constructor(props){
        super(props)

        // console.log('Parent contructor')
    }

    componentDidMount(){
        // console.log('Parent ComponentDidMount')
    }

    render(){
        // console.log('parent render')
        return(
            <div>
            <h2>About</h2>
            <div>
                LoggedIn User <UserContext.Consumer>
                    {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <p>This is Namaste React Web Series</p>
            {/* <User name="vipin functional component"/>  */}
            <UserClass name={"first"} location={"Allahabad"}/>
        </div>
        )
    }
}


// const About = ()=>{  
//     return(
//         <div>
//             <h2>About</h2>
//             <p>This is Namaste React Web Series</p>
//             {/* <User name="vipin functional component"/>  */}
//             <UserClass name={"vipin class based component"} location={"Allahabad ClassBased"}/>
//         </div>
//     )
// }

export default About;