import { configureStore } from "@reduxjs/toolkit";
import cityNameSlice from "./cityNameSlice";
import coordinateSlice from "./coordinateSlice";
import polutionSlice from "./polutionSlice";
import HourlySlice from "./HourlySlice";
import dailySlice from "./dailySlice";

const store = configureStore({
   reducer: {
      cityName: cityNameSlice,
      coordinate: coordinateSlice,
      pollution: polutionSlice,
      houralyCast: HourlySlice,
      daily: dailySlice,
   },
});

export default store;
