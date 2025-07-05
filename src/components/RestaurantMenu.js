import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../util/useRestaurantMenu"

const RestaurantMenu = () => {
    const {resId} = useParams()
    // Create Custom hook
    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer/>

    let  menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards
    if (menuItems === undefined){
        menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards
    }

    const {name, avgRating, sla, costForTwoMessage, cloudinaryImageId, totalRatingsString} = resInfo.cards[2].card.card.info

    return (
        <div className="restaurant-menu">
            <div className="res-menu-card">
                <h1>{name}</h1>
                <h2>{avgRating}{"("+totalRatingsString+")"}. {costForTwoMessage}</h2>
                <h2>{sla.deliveryTime}min</h2>
            </div>
            <div>
                <h1>Items</h1>
                 <ul>
                    {menuItems.map((item) => {
                        const {id, name, defaultPrice, price, category,description} = item.card.info
                         return (
                            <li key={id}>
                                <h2>{name}</h2>
                                <p>{category}</p>
                                <h3>₹{price/100 || defaultPrice/100}</h3>
                                <p>{description}</p>
                            </li>
                         )
                    })}
                    
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu