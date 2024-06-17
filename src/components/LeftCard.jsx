import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cardIcons } from "../utils/getWeatherIcons";

const LeftCard = () => {
   const { data } = useSelector((state) => state.coordinate);
   const [weather, setWeather] = useState([]);

   const visibility = data?.visibility ?? "6000";
   const speed = data?.wind?.speed ?? "5.14";
   const humidity = data?.main?.humidity ?? "67";
   const temperature = data?.main?.temp ?? "34";

   useEffect(() => {
      setWeather([
         {
            name: "Visibility",
            value: visibility,
            icon: cardIcons("visibility"),
            unit: " m",
         },
         {
            name: "WindSpeed",
            value: speed,
            icon: cardIcons("windspeed"),
            unit: " m/s",
         },
         {
            name: "Humidity",
            value: humidity,
            icon: cardIcons("humidity"),
            unit: " %",
         },
         {
            name: "Temp",
            value: temperature,
            icon: cardIcons("temperature"),
            unit: " °C",
         },
      ]);
   }, [data]);

   return (
      <div className="flex flex-wrap flex-1 justify-center gap-4">
         {weather.length > 0 &&
            weather.map((item, index) => {
               const Icon = item.icon;
               return (
                  <div
                     className="card max-w-[155px] w-full lg:w-[205px] lg:h-[205px] lg:shrink-0 rounded-md shadow-md px-[4%] py-[7%]"
                     key={index}
                  >
                     <div className="icon flex items-center gap-2">
                        <Icon className="w-[20px] h-[20px] shrink-0" />
                        <span className="text-base">{item.name}</span>
                     </div>
                     <h2 className="text-xl my-4">
                        {item.value} {item.unit}
                     </h2>
                     <p className="text-xs">last in 24 hours {item.value}</p>
                  </div>
               );
            })}
      </div>
   );
};

export default LeftCard;
