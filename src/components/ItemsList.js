
import {RES_IMAGE} from "../util/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../util/cartSlice"

const ItemsList = ({itemsList}) => {
    const dispatch = useDispatch()
    const handleAddClick = (item) => {
        
        dispatch(addItem(item))
    }
 
    return(
        <div className="my-2">
            {itemsList.map((item) => {
                const {id, name, defaultPrice, price, description,imageId} = item.card.info
                return (
                    <div key={id} className="border-b-2 border-gray-200 p-2 flex">
                        <div className="w-8/12 text-xs">
                            <h1 className="text-lg font-medium">{name}</h1>
                            <h1 className="font-medium">₹{price/100 || defaultPrice/100}</h1>
                            <p >{description}</p>
                            
                        </div>
                        <div className="w-4/12 text-center">
                            <img src={RES_IMAGE+imageId}/>
                            <button onClick={() => handleAddClick(item)} className="bg-black cursor-pointer text-white border-0 rounded-lg p-2 m-2 text-xs">Add</button>
                        </div>
                       
                    </div>
                )
            })}
        </div>
    )
}
export default ItemsList
