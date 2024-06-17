import React, { useEffect } from "react";
import { IoSunny as SunIcon } from "react-icons/io5"; // sun
import { useSelector, useDispatch } from "react-redux";
import { findDate, findTime, formatDate } from "../utils/getDate";
import { setDailyForecasts } from "../store/HourlySlice";
import { getHourlyIcons } from "../utils/getWeatherIcons";

const HouralyCard = () => {
   const { data } = useSelector((state) => state.houralyCast);
   const { dailyData } = useSelector((state) => state.daily);
   const dispatch = useDispatch();

   useEffect(() => {
      if (data && data.cod === "200") {
         const now = new Date();
         const days = Array.from({ length: 5 }, (_, i) => {
            const day = new Date(now);
            day.setDate(now.getDate() + i);
            return formatDate(day);
         });

         const forecasts = days.map((day) =>
            data.list.filter((item) =>
               findDate(item.dt).slice(0, 10).match(day)
            )
         );

         dispatch(setDailyForecasts(forecasts));
      }
   }, [data]);
   return (
      <>
         <div className="mt-10">
            <h2 className="text-lg">HOURLY</h2>
            <div className="mini-cards flex gap-5 mt-5 pb-2  overflow-x-scroll">
               {dailyData.item &&
                  dailyData.item.map((houralyItem, index) => {
                     const time = houralyItem?.dt;
                     const temp = houralyItem?.main?.temp ?? "45";
                     const Icon = houralyItem?.weather[0]?.main ?? "rain";
                     const Icons = getHourlyIcons(Icon);
                     return (
                        <div
                           className="w-[100px] px-2 card flex-shrink-0 shadow-md border text-center border-solid border-black transition-all ease-linear"
                           key={index}
                        >
                           <p className="text-base font-medium  my-[10px]">
                              {findTime(time)}
                           </p>
                           <span className="text-xl mb-[10px]">{temp}°</span>
                           <div className="my-[10px]">
                              {<Icons size={20} className="shrink-0 mx-auto" />}
                           </div>
                        </div>
                     );
                  })}
            </div>
         </div>
      </>
   );
};

export default HouralyCard;
