import { RES_IMAGE } from "../util/constants"

const RestaurentCard = (props) => {
  const {resData} = props
  const {info} = resData.card.card
  const {name, costForTwo, cloudinaryImageId, cuisines, avgRating, sla} = info
    
    return (
        <div  className="res-card">
            <img alt='res-image' className="res-image" 
            src={RES_IMAGE + cloudinaryImageId} />
            <p>{name}</p>
            <p>{cuisines.join(', ')}</p>
            <p>{costForTwo }</p>
            <p>{avgRating}</p>
            <p>{sla.deliveryTime}</p>
        </div>
    )
}

export default RestaurentCard