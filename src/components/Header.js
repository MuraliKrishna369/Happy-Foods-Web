import { RES_LOGO } from "../util/constants"
import { Link } from "react-router"
import useOnlineStatus from "../util/useOnlineStatus"
import ThemeContext from "../util/ThemeContext"
import { useContext } from "react"
const {useSelector} = require("react-redux")


const Header = () => {
    const onlineStauts = useOnlineStatus()
    const {darkTheme, updateTheme, userName} = useContext(ThemeContext)
    const cartItems = useSelector((state) => state.cart.items)

    const navItemStyles = darkTheme ? "px-4 py-1.5 m-2 rounded-lg cursor-pointer" : "px-4 py-1.5 m-2 rounded-lg cursor-pointer hover:bg-zinc-200"
    


    const handleTheme = () => {
        updateTheme(!darkTheme)
    }
    return (
       
            <div className={darkTheme ? "flex justify-between items-center bg-gray-800 p-1.5 text-white": "flex justify-between items-center bg-pink-50 p-1.5"}>
                <div className="px-1.5">
                    <img alt='res-logo' className="w-1/6 block" src={RES_LOGO}/>
                </div>
                <div className="px-8">
                    <ul className="flex text-sm">
                        <li className={ navItemStyles}>Online Status: {onlineStauts? "✅": "🔴"}</li>
                        <li className={ navItemStyles}><Link to="/">Home</Link></li>
                        <li className={navItemStyles}><Link to="/about">About Us</Link></li>
                        <li className={ navItemStyles}><Link to="/contact">Contact Us</Link></li>
                        <li className={navItemStyles}><Link to="/cart">Cart🛒-{cartItems.length}</Link></li>
                        <li className={navItemStyles}>{userName}</li>
                        <button className={navItemStyles} onClick={handleTheme}>{darkTheme ? "Dark" :"Light"}</button>
                        
                    </ul>
                </div>
            </div>
       
    )
}

export default Header