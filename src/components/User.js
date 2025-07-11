import { useEffect, useState } from "react"

const User = (props) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("useEffect called")
        // const timer = setInterval(() => {
        //     console.log("is it stop when we change the page")
        // }, 1000)
        return () => {
            // console.log("clear up your mess")
            // clearInterval(timer)
        }
    },[])
    
    return (
        
        <div className="user-card">
           <h3>Count: {count}</h3>
            <button onClick={() => {setCount(count+1)}}>click</button>
           <h1>I am functional Component</h1>
        </div>
    )
}
export default User