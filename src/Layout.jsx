import React from "react";
import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";
import HouralyCard from "./components/HouralyCard";
import FutureCard from "./components/FutureCard";
import MainContent from "./components/MainContent";
import SearchBar from "./components/SearchBar";
import { IoIosCloudOutline as CloudIcon } from "react-icons/io"; // cloud

const Layout = () => {
   return (
      <div className="container lg:flex flex-1  py-[3vh]">
         {/* // left side */}
         <div className="left-side shrink-0 lg:max-w-[500px] px-4 lg:border-e-2 lg:border-black">
            <div className="header-logo ">
               <h1>HOURCAST</h1>
               <CloudIcon size={20} />
            </div>
            <SearchBar />
            <MainContent />
            <div className="cards mt-6">
               <LeftCard />
            </div>
         </div>

         {/* //Right side */}
         <div className="right-side lg:mx-4 lg:w-full">
            <div className="cards mt-3">
               <RightCard />
            </div>
            <div className="px-4">
               <HouralyCard />
            </div>
            <div className="future-cards flex lg:gap-[15px] flex-row shrink-0 overflow-x-scroll snap-x snap-mandatory  pb-3 mx-4">
               <FutureCard />
            </div>
         </div>
      </div>
   );
};

export default Layout;
