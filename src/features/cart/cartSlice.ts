import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  thumbnail: string | undefined;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isVisible: boolean;
  isSuccess: boolean;
  shipping: number;
  isFreeShipping: boolean;
  isStandard: boolean;
  standardDays: string;
  isExpress: boolean;
  expressDays: string;
  isLoading: boolean;
  isProcessed: boolean;
}

const initialState: CartState = {
  items: [],
  shipping: 5,
  isFreeShipping: false,
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
      state.isVisible = !state.isVisible;
    },
    closeCart(state) {
      state.isVisible = false;
    },
    addToCart(
      state,
      action: PayloadAction<{
        id: number | undefined;
        title: string | undefined;
        price: number | undefined;
        thumbnail: string | undefined;
        quantity: number | undefined;
      }>,
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.isSuccess = true;
      }

      const totalPrice = state.items.reduce(
        (value, item) => value + Number(item.price) * item.quantity,
        0,
      );
      if (totalPrice > 100) {
        state.shipping = 0;
        state.isFreeShipping = true;
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
      const totalPrice = state.items.reduce(
        (value, item) => value + Number(item.price) * item.quantity,
        0,
      );
      if (totalPrice > 100) {
        state.shipping = 0;
        state.isFreeShipping = true;
      } else {
        state.isFreeShipping = false;
      }
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );

      state.items.splice(itemIndex, 1);
    },
    addStandardShipping(state, action: PayloadAction<number>) {
      state.isStandard = true;
      state.isExpress = false;
      state.shipping = action.payload;
      state.isSuccess = true;
      const totalPrice = state.items.reduce(
        (value, item) => value + Number(item.price) * item.quantity,
        0,
      );
      if (totalPrice > 100) {
        state.shipping = 0;
        state.isFreeShipping = true;
      }
    },
    addExpressShipping(state, action: PayloadAction<number>) {
      state.isExpress = true;
      state.isStandard = false;
      state.shipping = action.payload;
      state.isFreeShipping = false;
      state.isSuccess = true;
      const totalPrice = state.items.reduce(
        (value, item) => value + Number(item.price) * item.quantity,
        0,
      );
      if (totalPrice > 100) {
        state.isFreeShipping = true;
      }
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
