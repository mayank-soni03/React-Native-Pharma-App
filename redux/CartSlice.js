import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            const itemIdToRemove = action.payload.id;
            return state.filter((item) => item.id !== itemIdToRemove);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            return state.map((item) => (item.id === id ? { ...item, quantity } : item));
        },
    },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
