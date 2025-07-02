import RestaurentCard from "./RestaurantCard"

import {useEffect, useState} from 'react'

import Shimmer from "./Shimmer"



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]) 
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        const swiggyData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4356626&lng=78.44087999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await swiggyData.json()
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return (
        listOfRestaurants.length === 0?  <Shimmer/> : 
        <div className="body">
            <div className="search">           
                <input type="text" className="search-box" value={searchText}  onChange={(e) => {
                     setSearchText(e.target.value)
                    }}/>
                <button className="search-btn" onClick={() => {   
                  const filterListOfRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                  setFilteredListOfRestaurants(filterListOfRestaurants)
                }}>search</button>
            </div>
            <div className="res-container">
                 {filteredListOfRestaurants.map(function (restaurant){
                  return <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
                 })}                  
                
            </div>
        </div>
    )
}

export default Body