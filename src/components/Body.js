import RestaurentCard from "./RestaurantCard"
import restaurantsData from "../util/mockData"
import {useState} from 'react'




const Body = () => {
    const arr = useState(restaurantsData) // const [stateVar, setterFun] = useState([])
    const listOfRestaurants = arr[0]
    const setRestaurantList = arr[1]
    return (
        <div className="body">
            {console.log()}
            <div className="search">
                <button className="filter-btn" onClick={() => {
                    // Filter Logic here
                    const filteredRestaurants = listOfRestaurants.filter((res) => res.name === "Spicy Restaurant")
                    setRestaurantList(filteredRestaurants)   
                }}>
                    type of restaurants
                </button>
            </div>
            <div className="res-container">
                 {listOfRestaurants.map(function (restaurant){
                  return <RestaurentCard key={restaurant.id} resData={restaurant}/>
                 })}                 
                
            </div>
        </div>
    )
}

export default Body