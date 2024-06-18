import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCityName } from "../store/cityNameSlice";
import { Debounce } from "../utils/Debounce";
import { getCoordinate } from "../store/coordinateSlice";
import { getPollution } from "../store/polutionSlice";
import { getHouralyCast } from "../store/HourlySlice";

const SearchBar = () => {
   const [name, setName] = useState("");
   const [active, setActive] = useState(false);
   const { data } = useSelector((state) => state.cityName);
   const dispatch = useDispatch();

   const handleChangeSearch = (e) => {
      setName(e.target.value);
      setActive(true);
   };

   const debouncedSearch = Debounce(name, 500);

   useEffect(() => {
      if (debouncedSearch) {
         dispatch(getCityName(debouncedSearch));
      }
   }, [debouncedSearch, dispatch]);

   useEffect(() => {
      dispatch(getCoordinate({ lat: 17.385044, lon: 78.486671 }));
      dispatch(getPollution({ lat: 17.385044, lon: 78.486671 }));
      dispatch(getHouralyCast({ lat: 17.385044, lon: 78.486671 }));
   }, [name, dispatch]);

   const handleClick = (item) => () => {
      const { name, lat, lon } = item;
      dispatch(getCoordinate({ lat, lon }));
      dispatch(getPollution({ lat, lon }));
      dispatch(getHouralyCast({ lat, lon }));
      setName(name);
      setActive(false);
   };

   return (
      <div className="mt-5 relative">
         <div className="search-bar card relative w-full rounded-t-md border-solid border-b border-[#333333]">
            <input
               type="text"
               placeholder="Search..."
               autoComplete="off"
               name="search"
               value={name}
               onChange={handleChangeSearch}
               className="searchBar text-base w-full capitalize bg-transparent p-3 placeholder-[#333333] focus:outline-none"
            />
         </div>
         {active && data.length > 0 && (
            <ul className="cities card rounded-b-md px-3 absolute top-13 right-0 w-full max-h-28 overflow-y-auto">
               {data.map((item, index) => (
                  <li
                     key={index}
                     className="py-1 text-base text-[#333333] capitalize cursor-pointer"
                     onClick={handleClick(item)}
                  >
                     {item.name} {item.state} {item.country}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default SearchBar;
