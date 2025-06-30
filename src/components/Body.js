import RestaurentCard from "./RestaurantCard"
import resList from "../util/mockData"
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <p>Search</p>
            </div>
            <div className="res-container">
                 {resList.data.cards.map(function (restaurant){
                  return <RestaurentCard key={restaurant.card.card.info.id} resData={restaurant}/>
                 })}                 
                
            </div>
        </div>
    )
}

export default Body