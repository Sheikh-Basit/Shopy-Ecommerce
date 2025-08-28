import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(p => p.id === action.payload.id);
            if (item) {
                item.quantity += 1
            } else {

                state.push({ ...action.payload, quantity: 1 });
            }

        },

        deleteFromCart: (state, action) => {
            return state = state.filter(item => item.id !== action.payload);
        },

        increaseQuantity: (state, action) => {
            const item = state.find(p => p.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const item = state.find(p => p.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
        clearCart: () => {
            return [];
        }
    }
})

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer