// const initialState = {
//     cartItems: [],
// };

// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             console.log('Reducer - Adding to cart:', action.payload);
//             return {
//                 ...state,
//                 cartItems: [...state.cartItems, action.payload],
//             };
//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 cartItems: [...state.cartItems, action.payload],
//             };

//          // Add more cases for other actions here before default if needed
//          default:
//             return state;
//     }
// };

// export default cartReducer;