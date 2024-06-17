import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   dailyData: [],
};

const dailySlice = createSlice({
   name: "daily",
   initialState,
   reducers: {
      setDailyData: (state, action) => {
         state.dailyData = action.payload;
      },
   },
});

export const { setDailyData } = dailySlice.actions;

export default dailySlice.reducer;
