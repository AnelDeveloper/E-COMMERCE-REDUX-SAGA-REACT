import CartActionTypes from './cart-types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeQuantityItem = item => ({
  type: CartActionTypes.REMOVE_QUANTITY_ITEM,
  payload: item
})

export const ClearItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})