import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { RES_MENU } from "../util/constants"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
    const {resId} = useParams()
    const [resInfo, setResInfo] = useState(null)
    const [resItems, setResItems] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
       const data =  await fetch(RES_MENU+resId)
       const json = await data.json()
       setResInfo(json?.data?.cards[2].card.card.info)
      
       setResItems(json?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
       
      
       
    }
    if (resInfo === null) return <Shimmer/>

    const {id, name, city, areaName, avgRating, sla, lablels, costForTwoMessage, cloudinaryImageId,totalRatingsString} = resInfo
    const {deliveryTime} = sla

    
    return (
        <div className="restaurant-menu">
            <div className="res-menu-card">
                <h1>{name}</h1>
                <h2>{avgRating}{"("+totalRatingsString+")"}. {costForTwoMessage}</h2>
                <h2>{deliveryTime}min</h2>
            </div>
            <div>
                <h1>Items</h1>
                 <ul>
                    {resItems.map((item) => {
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