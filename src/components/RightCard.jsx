import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cardIcons } from "../utils/getWeatherIcons";
import { findTime } from "../utils/getDate";

const RightCard = () => {
   const { data: coordinate } = useSelector((state) => state.coordinate);
   const { data: pollution } = useSelector((state) => state.pollution);

   const [weather, setWeather] = useState([]);

   const sunrise = coordinate?.sys?.sunrise;
   const sunset = coordinate?.sys?.sunset;
   const pressure = coordinate?.main?.pressure;
   const aqua = pollution?.list?.[0]?.main?.aqi ?? 1;

   useEffect(() => {
      setWeather([
         {
            name: "Sunrise",
            value: sunrise ? findTime(sunrise) : "N/A",
            icon: cardIcons("sunrise"),
         },
         {
            name: "Sunset",
            value: sunset ? findTime(sunset) : "N/A",
            icon: cardIcons("sunset"),
         },
         {
            name: "Pressure",
            value: pressure ?? "N/A",
            icon: cardIcons("pressure"),
            unit: " hPa",
         },
         {
            name: "Aqua",
            value: aqua,
            icon: cardIcons("aqua"),
            unit: " AQI",
         },
      ]);
   }, [coordinate, pollution]);

   return (
      <div className="flex flex-wrap flex-1 justify-center lg:justify-start gap-4">
         {weather.length > 0 &&
            weather.map((item, index) => {
               const Icon = item.icon;
               return (
                  <div
                     className="card max-w-[155px] w-full lg:max-w-[205px] lg:h-[205px] lg:shrink-0 rounded-md shadow-md px-[1.125rem] py-[1.5rem]"
                     key={index}
                  >
                     <div className="icon flex items-center gap-2 lg:mt-4">
                        <Icon className="w-[20px] h-[20px] shrink-0" />
                        <span className="text-base">{item.name}</span>
                     </div>
                     <h2 className="text-xl my-4 lg:mt-5">
                        {item.value} {item.unit}
                     </h2>
                     <p className="text-xs lg:mt-5">
                        last in 24 hours {item.value}
                     </p>
                  </div>
               );
            })}
      </div>
   );
};

export default RightCard;
