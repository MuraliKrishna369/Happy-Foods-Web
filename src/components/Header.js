import { RES_LOGO } from "../util/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../util/useOnlineStatus"

const Header = () => {
    const onlineStauts = useOnlineStatus()
    return (
        <div className="header">
            <div className="logo">
                <img alt='res-logo' className="res-logo" src={RES_LOGO}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStauts? "✅": "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header