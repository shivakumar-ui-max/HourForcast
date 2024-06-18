import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   data: [],
   isLoading: true,
   Error: "",
};

export const getCityName = createAsyncThunk(
   "cityName/get",
   async (cityName, { rejectWithValue }) => {
      try {
         cityName = cityName ? cityName : "Hyderabad";
         const response = await fetch(
            `${import.meta.env.VITE_CITY_API}?q=${cityName}&limit=5&appid=${
               import.meta.env.VITE_API_KEY
            }`
         );
         if (!response.ok) {
            throw new Error("Failed to fetch city names");
         }
         const data = await response.json();
         return data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

const cityNameSlice = createSlice({
   name: "cityName",
   initialState,
   extraReducers: (builder) => {
      builder.addCase(getCityName.pending, (state) => {
         state.isLoading = true;
         state.Error = "";
      });
      builder.addCase(getCityName.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
         state.Error = "";
      });
      builder.addCase(getCityName.rejected, (state, action) => {
         state.isLoading = false;
         state.Error = action.payload || "some thing went wrong";
      });
   },
});

export default cityNameSlice.reducer;
