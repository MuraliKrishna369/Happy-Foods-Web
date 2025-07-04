import { useState } from "react"

const User = (props) => {
    const [count] = useState(0)
    const [count2] = useState(2)
    const {name, place, contact} = props
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h3>Name: {name}</h3>
            <h3>Place: {place}</h3>
            <p>Contact: {contact}</p>
        </div>
    )
}
export default User