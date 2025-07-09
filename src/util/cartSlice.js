import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalBill: 0
    },
    reducers: {
        updateBill: (state, action) => {
            state.totalBill = state.totalBill + action.payload
        }, 
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
        }

    }
})  



export const {updateBill, addItem, removeItem, clearCart} =  cartSlice.actions

export default cartSlice.reducer