import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload: newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload: id
      state.cart = state.cart.filter((Item) => Item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload: id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload: id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const cartItems = (state) => state.cart.cart;
export const totalPizzas = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);
export const totalPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
