import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                login: "Murali",
            }
        }  
        console.log("user consturctor")
    }

    async componentDidMount(){
        // Make a api call
        console.log("user component did mount also called")

        this.timer = setInterval(() => {
            console.log("Namaste React")
        }, 1000)
        const data = await fetch("https://api.github.com/users")
        const json = await data.json()
        this.setState({userInfo: json[0]})

    }
    componentDidUpdate(){
        console.log("user component did update also called")
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("user component will unmount")
    }
    
    render(){
        console.log("user render")
        const {avatar_url, login} = this.state.userInfo
        const {name, place, contact} = this.props
       
        return (
            <div className="user-card">
             <img src={avatar_url}/>   
            <h3>Name: {login}</h3>
        </div>
        )
    }

}
export default UserClass