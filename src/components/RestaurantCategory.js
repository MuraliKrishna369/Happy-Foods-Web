import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({resInfo}) => {
    const [showItems, setItems] = useState(false)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) => category.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <ul className="w-full">
            {categories.map((each) => {
                const {categoryId, title, itemCards} = each.card.card
                return (
                    <li key={categoryId} className="list-none m-2 p-2  border border-gray-200 rounded-lg " >
                        <div onClick={()=> setItems(!showItems)} className="flex justify-between">
                            <p className="text-lg font-bold">{title}({itemCards.length})</p>
                            <span>⬇️</span>
                        </div>
                        {showItems && <ItemsList itemsList={itemCards}/>}
                        
                    </li>
                )
            })}
        </ul>
    )
}

export default RestaurantCategory