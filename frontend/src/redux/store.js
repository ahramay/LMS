import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { fetchCartItems } from './slice/cartSlice';
import authReducer from './slice/authSlice';
import blogReducer from './slice/blogSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    blog: blogReducer,
  },
  
});


store.dispatch(fetchCartItems());


export default store;