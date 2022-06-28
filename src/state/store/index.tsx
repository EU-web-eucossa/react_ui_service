import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import userReducer from 'state/slices/userSlice';
import cartReducer from 'state/slices/cartSlice';
import productsReducer from 'state/slices/productsSlice';

const persistConfig = {
  key: 'eucossa-product-service-ui',
  version: 1,
  storage
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({ user: userReducer,cart:cartReducer })
);

const store = configureStore({
  reducer: {
    root: rootReducer,
    products:productsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;