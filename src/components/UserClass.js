import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
       console.log(this.props.name + "child constructor")
    }

    componentDidMount(){
        console.log(this.props.name + "child component did mount")

    }
    
    render(){
        console.log( this.props.name + "child render")
        const {name, place, contact} = this.props
        const {count} = this.state
        return (
            <div className="user-card">
            <h1>Count: {count}</h1>   
            <button onClick={() => {
                this.setState({count: this.state.count + 1})
            }}>click</button>
            <h3>Name: {name}</h3>
            <h3>Place: {place}</h3>
            <p>Contact: {contact}</p>
        </div>
        )
    }

}
export default UserClass