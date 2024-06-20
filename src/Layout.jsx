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
      <div className="w-full lg:flex flex-1  py-[3vh] overflow-hidden">
         {/* // left side */}
         <div className="left-side shrink-0 lg:max-w-[500px] px-4 lg:border-e-2 lg:border-[ background: rgba(245, 245, 245, 0.2);]">
            <div className="header-logo ">
               <h1 className="text-xl font-medium">HOURCAST</h1>
               <CloudIcon size={20} />
            </div>
            <SearchBar />
            <MainContent />
            <div className="cards mt-6">
               <LeftCard />
            </div>
         </div>
         {/* //Right side */}
         <div className="right-side lg:flex-1  overflow-hidden">
            <div className="cards mt-3 px-4">
               <RightCard />
            </div>
            <div className="px-4">
               <HouralyCard />
            </div>
            <div className="future-cards p-4">
               <FutureCard />
            </div>
         </div>
      </div>
   );
};

export default Layout;
