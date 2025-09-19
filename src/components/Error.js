import { useRouteError } from "react-router"


const Error = () => {
    const err = useRouteError()
    return (
        <div>
            <h1>Opps!!</h1>
            <h1>Something went wrong</h1>
            <h3>{err.status}</h3>
            <h4>{err.statusText}</h4>
            
        </div>
    )
}
export default Error