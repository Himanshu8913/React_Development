import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK - either mutate the existing state or return a new state
            state.items.length = 0;
            // return { items: [] }; // this will empty the original state
        },
    },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;