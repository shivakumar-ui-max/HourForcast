import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   data: {},
   isLoading: true,
   Error: "",
};

export const getCoordinate = createAsyncThunk(
   "coordinate/get",
   async ({ lat, lon }) => {
      const response = await fetch(
         `${import.meta.env.VITE_LAT_LON}?lat=${lat}&lon=${lon}&appid=${
            import.meta.env.VITE_API_KEY
         }&units=metric`
      );
      const data = await response.json();
      return data;
   }
);

const coordinateSlice = createSlice({
   name: "coordinate",
   initialState,
   extraReducers: (builder) => {
      builder.addCase(getCoordinate.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getCoordinate.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
      });
      builder.addCase(getCoordinate.rejected, (state, action) => {
         state.isLoading = false;
      });
   },
});

export default coordinateSlice.reducer;
