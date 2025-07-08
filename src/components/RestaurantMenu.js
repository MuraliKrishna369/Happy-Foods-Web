const { useState } = require("react")
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../util/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"



const RestaurantMenu = () => {
   
    const {resId} = useParams()
    
    // Create Custom hook
    const resInfo = useRestaurantMenu(resId)
    const [showIndex, setShowIndex] = useState(null)
    const [activeCategory, setActiveCategory] = useState(false)

    if (resInfo === null) return <Shimmer/>

    const {name, avgRating, city, costForTwoMessage, sla, totalRatingsString} = resInfo.cards[2].card.card.info

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) => category.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
       
        <div className="flex justify-center p-2 ">
            <div className="flex flex-col w-6/12 p-2 items-center border border-gray-300 rounded-lg">
                <div className="w-full">
                    <h1 className="font-bold text-2xl m-2">{name}</h1>
                    <div className="p-2 m-2 border   border-gray-200 rounded-lg">
                        <h1 className="font-bold  my-2">⭐{avgRating}({totalRatingsString}) . {costForTwoMessage}</h1>
                        <p className="text-sm">{city}</p>
                        <h1 className="font-bold">{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</h1>
                    </div>
                </div>
                
                {categories.map((category, index) => 
                        // There is a little bug over here
                        <RestaurantCategory key={category.card.card.title} 
                        data={category.card.card}
                        setActiveCategory={() => {setActiveCategory(!activeCategory)}}
                        setShowIndex={() => { activeCategory ? setShowIndex(index): setShowIndex(null)}}
                        showItems={index === showIndex ? true: false}
                        />)}
               
                    
            </div>
        </div>    
       
    )
}

export default RestaurantMenu