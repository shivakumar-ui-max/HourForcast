import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   data: [],
   dailyForecasts: [],
   isLoading: true,
   Error: "",
};

export const getHouralyCast = createAsyncThunk(
   "HouralyCast/get",
   async ({ lat, lon }) => {
      const response = await fetch(
         `${import.meta.env.VITE_FUTURE_WEATHER}?lat=${lat}&lon=${lon}&appid=${
            import.meta.env.VITE_API_KEY
         }&units=metric`
      );
      const data = await response.json();
      return data;
   }
);

const HouralyCastSlice = createSlice({
   name: "HouralyCast",
   initialState,
   reducers: {
      setDailyForecasts: (state, action) => {
         state.dailyForecasts = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getHouralyCast.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getHouralyCast.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
      });
      builder.addCase(getHouralyCast.rejected, (state) => {
         state.isLoading = false;
      });
   },
});

export const { setDailyForecasts } = HouralyCastSlice.actions;
export default HouralyCastSlice.reducer;
