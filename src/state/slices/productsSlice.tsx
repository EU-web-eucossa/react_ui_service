import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductEntity } from "state/types";

type ProductStateType = {
  loading: boolean
  error: any
  products: IProductEntity[]
};
const initialState: ProductStateType = {
  error: null
  , loading: false,
  products: []
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProductsStart: (state) => {
      state.loading = true
    },
    loadProductsSuccess: (state, action: PayloadAction<IProductEntity[]>) => {
      state.error = null
      state.loading = false
      state.products = [...action.payload]
    },
    loadProductsError: (state) => {
      state.loading = false
      state.error = true
    }

  },
});

export const { loadProductsError, loadProductsStart, loadProductsSuccess } = productsSlice.actions;
export default productsSlice.reducer;
