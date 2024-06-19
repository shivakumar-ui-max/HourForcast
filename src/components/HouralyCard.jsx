import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findDate, findTime, formatDate } from "../utils/getDate";
import { setDailyForecasts } from "../store/HourlySlice";
import { getHourlyIcons } from "../utils/getWeatherIcons";
import { TbArrowBadgeRightFilled as RightArrow } from "react-icons/tb";

const HouralyCard = () => {
   const { data, isLoading } = useSelector((state) => state.houralyCast);
   const { dailyData } = useSelector((state) => state.daily);
   const [activeIndex, setActiveIndex] = useState(-1);
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

   const addHourlyData = (item, index) => {
      console.log(item);
      setActiveIndex(index);
   };

   return (
      <>
         <div className="mt-10">
            {data.cod === "200" && (
               <div className="flex gap-2 items-center">
                  <h2 className="text-lg">HOURALY </h2>
                  <div className="flex items-center">
                     <RightArrow className="Left-Arrow" size={20} />
                     <RightArrow className="Right-Arrow" size={20} />
                  </div>
               </div>
            )}
            <div className="mini-cards flex gap-5 mt-5 pb-2 transition-all ease-linear overflow-x-scroll rounded-md">
               {dailyData.item &&
                  dailyData.item.map((houralyItem, index) => {
                     const time = houralyItem?.dt ?? "02:30:AM";
                     const temp = houralyItem?.main?.temp ?? "45";
                     const Icon = houralyItem?.weather[0]?.main ?? "rain";

                     const Icons = getHourlyIcons(Icon);
                     return isLoading ? (
                        "Loading..."
                     ) : (
                        <div
                           className={
                              activeIndex === index
                                 ? "w-[100px] px-2 card flex-shrink-0 shadow-md rounded-md border-1 border border-solid border-black text-center"
                                 : "w-[100px] px-2 card flex-shrink-0 shadow-md rounded-md text-center"
                           }
                           key={index}
                           onClick={() => addHourlyData(houralyItem, index)}
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
