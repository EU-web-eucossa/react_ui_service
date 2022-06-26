import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DataItem = {
  totalAmount: number,
  quantity: number,
  data: [{
    id:number,
    img: string,
    price: number,
    title:string
  }]
} 
type DataItems = {
  items: DataItem[],
  totalAmount: number,
  quantity:number,
}
const initialState: DataItems = {
    items:[],
    quantity: 0,
    totalAmount: 0
 }
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartTotal: (state) => {
      let { quantity, totalAmount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.quantity += itemTotal;
          cartTotal.totalAmount += quantity;
          return cartTotal;
        },
        { quantity: 0, totalAmount: 0 }
      );
      state.quantity = parseInt(quantity.toFixed(2));
      state.totalAmount = totalAmount;
    },
    addToCart: (state, action: PayloadAction<DataItem>) => {
      state.items=state.items.push((item)=>item.id === action.payload.id)
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    }, 
    increase: (state , action: PayloadAction<{quantity: number }>) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrease: (state, action:PayloadAction<{quantity:number}>) => {
      state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
  },
});
export const { AddToCart,getCartTotal,increase,remove,decrease } = cartSlice.actions;
export default cartSlice.reducer;
