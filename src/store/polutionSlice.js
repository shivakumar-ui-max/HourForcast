import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   data: {},
   isLoading: true,
   Error: "",
};

export const getPollution = createAsyncThunk(
   "pollution/get",
   async ({ lat, lon }) => {
      const response = await fetch(
         `${
            import.meta.env.VITE_CURRENT_POLLUTION
         }?lat=${lat}&lon=${lon}&appid=${
            import.meta.env.VITE_API_KEY
         }&units=metric`
      );
      const data = await response.json();
      return data;
   }
);

const pollutionSlice = createSlice({
   name: "pollution",
   initialState,
   extraReducers: (builder) => {
      builder.addCase(getPollution.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getPollution.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
      });
      builder.addCase(getPollution.rejected, (state, action) => {
         state.isLoading = false;
         state.Error = action.payload;
      });
   },
});

export default pollutionSlice.reducer;
