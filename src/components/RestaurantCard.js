import { useContext } from "react"
import { RES_IMAGE } from "../util/constants"
import ThemeContext from "../util/ThemeContext"

const RestaurentCard = (props) => {
  const {resData} = props
  const {name, costForTwo, cloudinaryImageId, cuisines, avgRating, areaName} = resData.info

  const {darkTheme} = useContext(ThemeContext)
  const restaurantCardStyles = darkTheme ? "bg-gray-500 text-white": "bg-gray-200"
    
    return (
        <div  className={`${restaurantCardStyles} w-42 text-[10px] m-2.5  flex flex-col rounded-2xl h-74`}>
            <img alt='res-image' className="w-[200px] rounded-2xl" 
            src={RES_IMAGE + cloudinaryImageId} />
            <div className="p-2">
                <p>{name}</p>
                <p>{cuisines.slice(0,4).join(',')}</p>
                <p>{costForTwo }</p>
                <p>{avgRating}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

// we want to show promoted cards and other also
// but don't change the restaurant card components
// but we want promoted or not feature
// so we use HOC

export const withPromotedLabel = (RestaurentCard) => {
    return (props) => {
        return (
            <div>
                <span className="text-white bg-black  p-2 rounded-lg text-xs absolute">Promoted</span>
                <RestaurentCard {...props} />
            </div>
        )
    }
}

export default RestaurentCard