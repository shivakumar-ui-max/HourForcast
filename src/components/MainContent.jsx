import React from "react";
import { FaArrowRightLong as RightArrow } from "react-icons/fa6"; // right arrow
import { getHeaderIcons } from "../utils/getWeatherIcons";
import { useSelector } from "react-redux";

const MainContent = () => {
   const { data } = useSelector((state) => state.coordinate);

   const weatherMain = data?.weather?.[0]?.main ?? "rain";
   const name = data?.name ?? "hyderabad";

   return (
      <main>
         <img
            src={getHeaderIcons(weatherMain)}
            alt="main-img"
            className="w-[100px] h-[100px] mt-4 mx-auto"
         />

         <h1 className="main-font mt-3 text-center text-5xl tracking-widest">
            {weatherMain}
         </h1>

         <div className="mt-8 flex gap-2 items-center">
            <div className="flex gap-2 justify-between items-center">
               <h2 className="text-lg">Today</h2>
               <RightArrow size={20} />
            </div>
            <h2 className="text-lg capitalize">{name}</h2>
         </div>
      </main>
   );
};

export default MainContent;
