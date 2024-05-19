import { Component } from "react";

//this extend will know thats a class based component.
class UserClass extends Component{
    constructor(props){
      super(props)

      this.state= {
        userInfo :{
            name :'Dummy name',
            location:'default'
        }
      }
    //   console.log( this.props.name+'child Constructor')
    }

    //once component mounted on the DOM means after render method then this componentDidMount will trigger\
    async componentDidMount(){
        // console.log(this.props.name+'child ComponentDidMount')
      const data = await fetch("https://api.github.com/users/gautamvpn")
      const json = await data.json()
      this.setState({
        userInfo:json
      })
      console.log(json)
    }

    
    // function component return some peice of jsx
    //  and
    //Class based components is a class which render method which return some peice of jsx
    render(){
        // console.log(this.props.name+'child render')
       const{name,location,avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
            <img src={avatar_url} alt="" />
            <h2>Name:{name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: Gautamvpn@gmail.com</h2>
        </div>
        )
    }
}

export default UserClass;