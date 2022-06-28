import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductEntity } from "../types";

export type ProductType = {
  totalAmount: number;
  quantity: number;
} & Partial<IProductEntity>;
type CartStateType = {
  items: ProductType[];
  totalAmount: number;
  quantity: number;
};
const initialState: CartStateType = {
  items: [],
  quantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (
      state: CartStateType,
      action: PayloadAction<ProductType>
    ) => {
      state.items = state.items.find(
        (prod) => prod._id === action.payload._id
      )
        ? state.items.map((prod) =>
          prod._id === action.payload._id
            ? {
              ...prod,
              quantity: prod.quantity += 1,
              totalAmount: ((prod.price as any as number) * prod.quantity)
            }
            : prod
        )
        : [...state.items, { ...action.payload, totalAmount: ((action.payload.price as any as number) * action.payload.quantity) }];
      state.quantity = state.items.length;
      state.totalAmount = state.items.reduce(
        (previous, current) => previous + current.totalAmount,
        0
      );
    },
    removeFromCart: (
      state: CartStateType,
      action: PayloadAction<{ _id: string }>
    ) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.quantity = state.items.length;
      state.totalAmount = state.items.reduce(
        (previous, current) => previous + current.totalAmount,
        0
      );
    },
    clearCart: (state: CartStateType) => {
      state = initialState;
    },
    reduceCartItemQuantity: (
      state: CartStateType,
      action: PayloadAction<{ _id: string }>
    ) => {
      state.items = state.items.map((prod) =>
        prod._id === action.payload._id
          ? {
            ...prod,
            quantity: (prod.quantity -= 1),
            totalAmount: prod.price! * prod.quantity!,
          }
          : prod
      );
      state.quantity = state.items.length;
      state.totalAmount = state.items.reduce(
        (previous, current) => previous + current.totalAmount,
        0
      );
    },
  },
});
export const {
  addProductToCart,
  removeFromCart,
  reduceCartItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
