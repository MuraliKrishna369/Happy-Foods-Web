import { RES_IMAGE } from "../util/constants"

const RestaurentCard = (props) => {
  const {resData} = props
  const {name, costForTwo, cloudinaryImageId, cuisines, avgRating, areaName} = resData.info
    
    return (
        <div  className="bg-gray-200 w-48 text-xs m-2.5 p-3 flex flex-col rounded-lg">
            <img alt='res-image' className="w-[200px] rounded-2xl" 
            src={RES_IMAGE + cloudinaryImageId} />
            <p>{name}</p>
            <p>{cuisines.slice(0,4).join(',')}</p>
            <p>{costForTwo }</p>
            <p>{avgRating}</p>
            <p>{areaName}</p>
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