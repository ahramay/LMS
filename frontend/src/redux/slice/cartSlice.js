import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://dev.hsma.org';

// Fetch Cart Items from API
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
  const response = await axios.get(`/api/cart/items`);
  return response.data;
});

// Add Item to Cart via API
export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (product) => {
  try {
  const response = await axios.post(`${API_BASE_URL}/api/cart/add`,product);
    return response; 
} catch (err) {
  return err;
}});

export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async (cart_item_id) => {
  await axios.delete(`${API_BASE_URL}/api/cart/delete/${cart_item_id}`);
  return cart_item_id;
});

// Clear the Entire Cart via API
export const clearCart = createAsyncThunk('cart/clearCart', async () => {
  await axios.delete(`${API_BASE_URL}/api/cart/clear`);
});


export const selectTotalPrice = (state) =>state.cart.items.reduce((total, item) => +total + +item.course.duration, 0);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: 'idle',
    cartItemsLenght:0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.cartItemsLenght = action.payload.length;
        state.loading = 'succeeded';
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.loading = 'failed';
      })
      .addCase(addItemToCart.pending, (state) => {

        state.loading = 'loading';
      })
      .addCase(addItemToCart.fulfilled, (state) => {
        state.loading = 'succeeded';
      })
      .addCase(addItemToCart.rejected, (state) => {
        state.loading = 'failed';
      })
  
      .addCase(clearCart.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
        state.cartItemsLenght = 0;
        state.loading = 'succeeded';
      })
      .addCase(clearCart.rejected, (state) => {
        state.loading = 'failed';
      })
      .addCase(removeItemFromCart.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        const productId = action.payload;
        state.items = state.items.filter(item => item._id !== productId);
        state.cartItemsLenght = state.items.length;
        state.loading = 'succeeded';
      })
      .addCase(removeItemFromCart.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export default cartSlice.reducer;
