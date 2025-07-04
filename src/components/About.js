import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"


class About extends Component{
    constructor(props){
        super(props)
        console.log("parent constuctor")
    }
    componentDidMount(){
        console.log("parent componentdid mount")
    }
    render(){
        console.log("parent rendered")
        return (
        <div className="about-container">
        <h1>About Page</h1>
            <UserClass name={"First"} place={"AP"} contact={"KrishaSep6"}/>
            <UserClass name={"Second"} place={"AP"} contact={"KrishaSep6"}/>
        </div>
        )
    }
}






export default About