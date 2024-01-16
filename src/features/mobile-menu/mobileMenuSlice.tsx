import { createSlice } from "@reduxjs/toolkit";

interface MobileMenuProps {
  isVisible: boolean;
}

const initialState: MobileMenuProps = {
  isVisible: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    openMobileMenu(state) {
      state.isVisible = true;
    },
    closeMobileMenu(state) {
      state.isVisible = false;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
