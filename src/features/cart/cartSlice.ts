import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  thumbnail: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  shipping: number;
  isVisible: boolean;
  isSuccess: boolean;
  isStandard: boolean;
  standardDays: string;
  isExpress: boolean;
  expressDays: string;
  isLoading: boolean;
  isProcessed: boolean;
}

const initialState: CartState = {
  items: [],
  shipping: 0,
  isVisible: false,
  isSuccess: false,
  isStandard: false,
  standardDays: "4-7",
  isExpress: false,
  expressDays: "2-4",
  isLoading: false,
  isProcessed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart(state) {
      state.isVisible = true;
    },
    closeCart(state) {
      state.isVisible = false;
    },
    addToCart(
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        images: string[];
        thumbnail: string;
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
    deleteFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );

      state.items.splice(itemIndex, 1);
      state.isSuccess = true;
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
    processPayment(state) {
      state.isLoading = true;
    },
    completePayment(state) {
      state.isProcessed = true;
    },
    endProcessPayment(state) {
      state.isLoading = false;
    },
  },
});

export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  deleteFromCart,
  addStandardShipping,
  addExpressShipping,
  processPayment,
  completePayment,
  endProcessPayment,
} = cartSlice.actions;
export default cartSlice.reducer;
