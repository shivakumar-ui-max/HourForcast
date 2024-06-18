import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   data: {},
   isLoading: true,
   Error: "",
};

export const getCoordinate = createAsyncThunk(
   "coordinate/get",
   async ({ lat, lon }, { rejectWithValue }) => {
      try {
         const response = await fetch(
            `${import.meta.env.VITE_LAT_LON}?lat=${lat}&lon=${lon}&appid=${
               import.meta.env.VITE_API_KEY
            }&units=metric`
         );
         if (!response.ok) {
            throw new Error("Faild to fetch coordinate");
         }
         const data = await response.json();
         return data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

const coordinateSlice = createSlice({
   name: "coordinate",
   initialState,
   extraReducers: (builder) => {
      builder.addCase(getCoordinate.pending, (state) => {
         state.isLoading = true;
         state.Error = "";
      });
      builder.addCase(getCoordinate.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
         state.Error = "";
      });
      builder.addCase(getCoordinate.rejected, (state, action) => {
         state.isLoading = false;
         state.Error = action.payload || "something went wrong";
      });
   },
});

export default coordinateSlice.reducer;
