import CartActionTypes from './cart-types';
import { addItemToCart , removeQuntityItemFromCart } from './cart.utilitis';




const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden
        };
      case CartActionTypes.ADD_ITEM:
        return {
          ...state,
          name: 'tito'
        }; 
        case CartActionTypes.REMOVE_QUANTITY_ITEM:
          return {
            ...state,
            cartItems: removeQuntityItemFromCart(state.cartItems , action.payload )
          }
        case CartActionTypes.REMOVE_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.filter(
              cartItem => cartItem.id !== action.payload.id
            )
          };
          
      
      default:
        return state;
    }
  };

export default cartReducer;

