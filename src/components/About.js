import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"


class About extends Component{
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        
    }
    render(){
       
        return (
        <div className="about-container">
        <h1>About Page</h1>
            <User name={"First"} place={"AP"} contact={"KrishaSep6"}/>
            
        </div>
        )
    }
}






export default About