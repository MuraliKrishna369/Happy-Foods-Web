import RestaurentCard, {withPromotedLabel} from "./RestaurantCard"

import {useEffect, useState, useContext} from 'react'

import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../util/useOnlineStatus"
import ThemeContext from "../util/ThemeContext"




const Body = () => {
    
    const [listOfRestaurants, setListOfRestaurants] = useState([]) 
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    
    const {darkTheme, userName,  setUserName} = useContext(ThemeContext)

    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        const swiggyData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4356626&lng=78.44087999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await swiggyData.json()
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus = useOnlineStatus()
    const inputBoxStyles = darkTheme ? "w-48 h-6 p-2 border border-white text-sm text-white" : "w-48 h-6 p-2 border text-sm"
    if(!onlineStatus) return <h1>Please Check Your Internet Connection</h1>
    
    return (
        listOfRestaurants.length === 0?  <Shimmer/> : 
        <div className={darkTheme ? "bg-gray-900": ""}>
            <div className=" flex justify-center items-center">           
                <input type="search" className={inputBoxStyles} value={searchText}  onChange={(e) => {
                     setSearchText(e.target.value)
                    }}/>
                <button className="p-2 m-2 bg-gray-300 hover:bg-green-300 border-0  rounded-lg cursor-pointer text-sm" onClick={() => {   
                  const filterListOfRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                  setFilteredListOfRestaurants(filterListOfRestaurants)
                }}>Search</button>
                <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} className={inputBoxStyles}/>
                <button onClick={() => {userName === "" && setUserName(userName) } } className="p-2 m-2 bg-gray-300 hover:bg-green-300 border-0 rounded-lg cursor-pointer text-sm">Chang User Name</button>
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