import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuCalendarDays as Calendar } from "react-icons/lu";
import { setDailyData } from "../store/dailySlice";
import { cardIcons, getHeaderIcons } from "../utils/getWeatherIcons";
import { getDays, monthlyDay } from "../utils/getDate";
import { TbArrowBadgeRightFilled as RightArrow } from "react-icons/tb";

const FutureCard = () => {
   const { dailyForecasts, isLoading } = useSelector(
      (state) => state.houralyCast
   );
   const dispatch = useDispatch();
   const [activeIndex, setActiveIndex] = useState(-1);

   const addDailyData = (item, index) => {
      dispatch(setDailyData({ item }));
      setActiveIndex(index);
   };

   useEffect(() => {
      if (dailyForecasts && dailyForecasts.length > 0) {
         addDailyData(dailyForecasts[0], 0);
      }
   }, [dailyForecasts]);

   return (
      <>
         {dailyForecasts.length > 0 && (
            <h2 className="text-lg">Next Forcast</h2>
         )}
         <div className="overflow-x-auto flex  gap-4 rounded-md pb-2">
            {dailyForecasts &&
               dailyForecasts.map((item, index) => {
                  const visibility = item[0]?.visibility ?? "10000";
                  const humidity = item[0]?.main?.humidity ?? "58";
                  const temp = item[0]?.main?.temp ?? "45";
                  const weatherMain = item[0]?.weather[0]?.main ?? "rain";
                  const day = item[0].dt ?? "6/15";

                  const Icon = {
                     temperature: cardIcons("temperature"),
                     visibility: cardIcons("visibility"),
                     humidity: cardIcons("humidity"),
                  };
                  return isLoading ? (
                     "loading.."
                  ) : (
                     <div
                        className={
                           activeIndex === index
                              ? "max-w-[370px] w-full lg:max-w-[290px] p-5 card shadow-md rounded-md  shrink-0  border border-1 border-black border-solid snap-center "
                              : "max-w-[370px] w-full lg:max-w-[290px] p-5 card shadow-md rounded-md  shrink-0  snap-center"
                        }
                        key={index}
                        onClick={() => addDailyData(item, index)}
                     >
                        <div className="flex justify-between items-center">
                           <Calendar size={20} />
                           <p className="text-2xl font-normal">
                              {getDays(day)}
                           </p>
                           <span className="text-2xl font-normal">
                              {monthlyDay(day)}
                           </span>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                           <img
                              src={getHeaderIcons(weatherMain)}
                              alt={weatherMain}
                              className="w-[80px] h-[80px]"
                           />
                        </div>
                        <h2 className="text-5xl main-font mt-2 text-center">
                           {weatherMain}
                        </h2>
                        <div>
                           <div className="temp flex justify-between mt-5 font-medium text-base">
                              <div className="flex items-center gap-2">
                                 <Icon.temperature size={20} />
                                 <p className="justify-start">Temp</p>
                              </div>
                              <span>{temp} °C</span>
                           </div>
                           <div className="humidity flex justify-between mt-5 font-medium text-base">
                              <div className="flex items-center gap-2">
                                 <Icon.humidity size={20} />
                                 <p className="justify-start">Humidity</p>
                              </div>
                              <span>{humidity} %</span>
                           </div>
                           <div className="visibility flex justify-between mt-5 font-medium text-base">
                              <div className="flex items-center gap-2">
                                 <Icon.visibility size={20} />
                                 <p className="justify-start">Visibility</p>
                              </div>
                              <span>{visibility} m</span>
                           </div>
                        </div>
                        <footer className="mt-3 flex  justify-end items-center">
                           <RightArrow className="Left-Arrow" size={20} />
                           <RightArrow className="Right-Arrow" size={20} />
                        </footer>
                     </div>
                  );
               })}
         </div>
      </>
   );
};

export default FutureCard;
