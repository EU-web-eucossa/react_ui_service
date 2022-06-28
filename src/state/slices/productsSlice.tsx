import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductEntity } from "state/types";
import { ProductType } from "./cartSlice";
import {products} from 'data/products'

type ProductStateType = {
  products: IProductEntity[]
};
const initialState: ProductStateType = {
 products:[...products]
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<ProductType>) => {
     
    },  
    
  },
});

export const { loadProducts } = productsSlice.actions;
export default productsSlice.reducer;
