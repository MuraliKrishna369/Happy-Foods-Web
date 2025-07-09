
const {useSelector, useDispatch} = require("react-redux")
const  { updateBill } = require("../util/cartSlice")

const Cart = () => {
    const dispatch = useDispatch()
    const {items, totalBill} = useSelector((state) => state.cart)

    
    
  
    return (
        <div className="flex flex-col items-center">
            <h1>Cart</h1>
            <div className="w-6/12">
                {items.map((item) => {
                    const {id, name, price, defaultPrice, description} = item.card.info
                    
                    dispatch(updateBill(price/100 || defaultPrice/100))

                    return (
                        <div className = "m-2 p-2 border-b border-gray-300" key={id}>
                            <h1 className="text-sm font-medium">{name}</h1>
                            <h1 className="text-sm">₹{price/100 || defaultPrice/100}</h1>
                            <p className="text-[8px]">{description}</p>
                            <button className="text-sm border border-gray-200 py-1 m-2">
                            <span className="px-2">-</span>
                            <span className="text-[10px]">Add</span>
                            <span className="px-2">+</span>
                            </button>
                            
                        </div>
                    )
                })}
                <h1>Total Bill: ₹{totalBill}</h1>
            </div>
            
        </div>
    )
}
export default Cart