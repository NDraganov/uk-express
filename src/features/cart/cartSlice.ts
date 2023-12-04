import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
}

interface CartState {
  items: CartItem[];
  shipping: number;
  isVisible: boolean;
  isSuccess: boolean;
  isStandard: boolean;
  isExpress: boolean;
}

const initialState: CartState = {
  items: [],
  shipping: 0,
  isVisible: false,
  isSuccess: false,
  isStandard: false,
  isExpress: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        images: string[];
      }>,
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
        state.isSuccess = true;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
        state.isSuccess = true;
      } else {
        state.items[itemIndex].quantity--;
      }
    },
    addStandardShipping(state, action: PayloadAction<number>) {
      state.isStandard = !state.isStandard;
      state.isExpress = false;
      state.shipping = action.payload;
      state.isSuccess = true;
    },
    addExpressShipping(state, action: PayloadAction<number>) {
      state.isExpress = !state.isExpress;
      state.isStandard = false;
      state.shipping = action.payload;
      state.isSuccess = true;
    },
    cancelShipping(state) {
      state.isStandard = false;
      state.isExpress = false;
      state.shipping = 0;
    },
    openCart(state) {
      state.isVisible = true;
    },
    closeCart(state) {
      state.isVisible = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addStandardShipping,
  addExpressShipping,
  cancelShipping,
  openCart,
  closeCart,
} = cartSlice.actions;
export default cartSlice.reducer;
