import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   data: [],
   isLoading: true,
   Error: "",
};

export const getCityName = createAsyncThunk(
   "cityName/get",
   async (cityName) => {
      cityName = cityName ? cityName : "Hyderabad";
      const response = await fetch(
         `${import.meta.env.VITE_CITY_API}?q=${cityName}&limit=5&appid=${
            import.meta.env.VITE_API_KEY
         }`
      );
      const data = await response.json();
      return data;
   }
);

const cityNameSlice = createSlice({
   name: "cityName",
   initialState,
   extraReducers: (builder) => {
      builder.addCase(getCityName.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getCityName.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
      });
      builder.addCase(getCityName.rejected, (state) => {
         state.isLoading = false;
      });
   },
});

export default cityNameSlice.reducer;
