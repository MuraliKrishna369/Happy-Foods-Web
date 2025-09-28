import { RES_LOGO } from "../util/constants"
import { Link } from "react-router"
import useOnlineStatus from "../util/useOnlineStatus"
import ThemeContext from "../util/ThemeContext"
import { useContext } from "react"
const {useSelector} = require("react-redux")

//px-4 py-1.5 m-2 
const Header = () => {
    const onlineStauts = useOnlineStatus()
    const {darkTheme, updateTheme, userName} = useContext(ThemeContext)
    const cartItems = useSelector((state) => state.cart.items)

    const navItemStyles = darkTheme ? "rounded-lg cursor-pointer py-2 px-2" : "rounded-lg cursor-pointer hover:bg-zinc-200 py-2 px-2"
    


    const handleTheme = () => {
        updateTheme(!darkTheme)
    }
    return (
       
            <div className={darkTheme ? "flex justify-between items-center bg-gray-800 p-1.5 text-white": "flex justify-between items-center bg-pink-50 p-1.5"}>
                <div className="w-12">
                    <img alt='res-logo' className={darkTheme ? "bg-white rounded-[50%]": ""} src={RES_LOGO}/>
                </div>
                <div className="mr-4">
                    <ul className="flex justify-between items-center text-[10px] sm:text-sm  sm:w-[600px]">
                        <li className={ navItemStyles}>Online Status: {onlineStauts? "✅": "🔴"}</li>
                        <li className={ navItemStyles}><Link to="/">Home</Link></li>
                        <li className={navItemStyles}><Link to="/about">About</Link></li>
                        <li className={ navItemStyles}><Link to="/contact">Contact</Link></li>
                        <li className={navItemStyles}><Link to="/cart">Cart🛒-{cartItems.length}</Link></li>
                        <button className={navItemStyles} onClick={handleTheme}>{darkTheme ? "Dark" :"Light"}</button>
                        
                    </ul>
                </div>
            </div>
       
    )
}

export default Header