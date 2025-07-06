import { RES_LOGO } from "../util/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../util/useOnlineStatus"

const Header = () => {
    const onlineStauts = useOnlineStatus()
    return (
        <div className="flex justify-between items-center bg-pink-50 p-1.5">
            <div className="px-1.5">
                <img alt='res-logo' className="w-1/6" src={RES_LOGO}/>
            </div>
            <div className="px-12">
                <ul className="flex text-sm">
                    <li className="px-6 py-1.5 rounded-lg cursor-pointer hover:bg-green-300">Online Status: {onlineStauts? "✅": "🔴"}</li>
                    <li className="px-6 py-1.5 rounded-lg cursor-pointer  hover:bg-green-300"><Link to="/">Home</Link></li>
                    <li className="px-6 py-1.5 rounded-lg cursor-pointer  hover:bg-green-300"><Link to="/about">About Us</Link></li>
                    <li className="px-6 py-1.5 rounded-lg cursor-pointer  hover:bg-green-300"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-6 py-1.5 rounded-lg cursor-pointer  hover:bg-green-300">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header