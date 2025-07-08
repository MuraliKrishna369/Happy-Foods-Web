
import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data, showItems, setShowIndex, setActiveCategory}) => {
    
    const {title, itemCards} = data
   

    const handleClick = () => {
       setActiveCategory() 
       setShowIndex()
      

    }

    return (
        <ul className="w-full">
            <li className="list-none m-2 p-2  border border-gray-200 rounded-lg " >
                <div onClick={handleClick} className="flex justify-between cursor-pointer">
                    <span className="text-lg font-bold">{title}({itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemsList itemsList={itemCards}/>}
            </li>
        </ul>
    )
}

export default RestaurantCategory