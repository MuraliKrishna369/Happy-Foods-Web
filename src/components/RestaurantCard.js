import { RES_IMAGE } from "../util/constants"

const RestaurentCard = (props) => {
  const {resData} = props
  const {name, costForTwo, cloudinaryImageId, cuisines, avgRating, areaName} = resData.info
    
    return (
        <div  className="res-card">
            <img alt='res-image' className="res-image" 
            src={RES_IMAGE + cloudinaryImageId} />
            <p>{name}</p>
            <p>{cuisines}</p>
            <p>{costForTwo }</p>
            <p>{avgRating}</p>
            <p>{areaName}</p>
        </div>
    )
}

export default RestaurentCard