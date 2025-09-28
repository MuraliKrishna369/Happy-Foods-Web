import RestaurentCard, {withPromotedLabel} from "./RestaurantCard"

import {useEffect, useState, useContext} from 'react'


import Shimmer from "./Shimmer"
import { Link } from "react-router"
import useOnlineStatus from "../util/useOnlineStatus"
import ThemeContext from "../util/ThemeContext"
import { BASE_URL } from "../util/constants"
import axios from "axios"




const Body = () => {
    
    const [listOfRestaurants, setListOfRestaurants] = useState([]) 
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    
    const {darkTheme} = useContext(ThemeContext)

    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        const swiggyData = await axios.get(BASE_URL+"/restaurants", {withCredentials: true})
      
        
        setListOfRestaurants(swiggyData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(swiggyData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus = useOnlineStatus()

    if(!onlineStatus) return <h1>Please Check Your Internet Connection</h1>
    
    return (
        listOfRestaurants.length === 0?  <Shimmer/> : 
        <div className={darkTheme ? "bg-gray-900": ""}>
            <div className=" flex justify-center items-center text-white text-sm">           
                <input type="search" className={darkTheme ?"border-2 border-white rounded-lg w-40 h-8 p-2": "border-1 border-black rounded-lg w-40 p-2 text-black"} value={searchText}  onChange={(e) => {
                     setSearchText(e.target.value)
                    }}/>
                <button className="p-2 m-2 bg-black hover:bg-green-300 border-0  rounded-lg cursor-pointer text-sm" onClick={() => {   
                  const filterListOfRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                  setFilteredListOfRestaurants(filterListOfRestaurants)
                }}>Search</button>
              
            </div>
            <div className="flex justify-center flex-wrap">
                 {filteredListOfRestaurants.map(function (restaurant){
                    const {id, avgRating} = restaurant.info
                  return <Link key={id} to={"/restaurant/"+id}>
                    { avgRating > 4.5? <RestaurantCardPromoted resData={restaurant}/> : <RestaurentCard  resData={restaurant}/>}
                    </Link>
                 })}                  
                
            </div>
        </div>
    )
}

export default Body