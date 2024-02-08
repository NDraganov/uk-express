import { createSlice } from "@reduxjs/toolkit";
import { type Review } from "../../../../api/products-types/productsTypes";

interface ReviewReaction {
  id: number;
  likes: number;
  dislikes: number;
}

interface InitialState {
  reviews: Review[];
  reviewReactions: ReviewReaction[];
}

const initialState: InitialState = {
  reviews: [],
  reviewReactions: [{ id: 0, likes: 0, dislikes: 0 }],
};

const productReviewsSlice = createSlice({
  name: "productReviews",
  initialState,
  reducers: {
    // setReviews(state, action) {
    //   state.reviews = action.payload;
    //   const reviewId = state.reviews.findIndex(
    //     (review) => review.id === action.payload,
    //   );
    //   state.reviews.push({state.reviewReactions});
    // },
    // increaseLikes(state, action: PayloadAction<number>) {
    //   const reviewId = state.reviews.findIndex(
    //     (review) => review.id === action.payload,
    //   );
    //   state.reviewReactions.push();
    // },
    // increaseDislikes(state) {
    //   state.dislikes++;
    // },
  },
});

// export const { setReviews, increaseLikes, increaseDislikes } =
//   productReviewsSlice.actions;
export default productReviewsSlice.reducer;
