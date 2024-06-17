// Value Icons
import { FaTemperatureThreeQuarters as Temperature } from "react-icons/fa6"; // temperature
import { MdCompress as Pressure } from "react-icons/md"; // pressure
import { IoWaterOutline as Humidity } from "react-icons/io5"; // humidity
import { MdOutlineVisibility as Visibility } from "react-icons/md"; // visibility
import { PiWind as WindSpeed } from "react-icons/pi"; // wind speed
import { BsHandThumbsDown as Aqua } from "react-icons/bs"; // down thumb
import { GiSunrise as Sunrise } from "react-icons/gi"; // Sunrise
import { GiSunset as Sunset } from "react-icons/gi"; // Sunset

// Card Icons
import { IoSunny as SunIcon } from "react-icons/io5"; // sun
import { BsCloudLightningRain as RainIcon } from "react-icons/bs"; // rain
import { IoIosCloudOutline as CloudIcon } from "react-icons/io"; // cloud

// Header Icons
import Sun from "../assets/Sun.svg";
import Cloud from "../assets/Cloud.svg";
import Rain from "../assets/Rain.svg";
import Haze from "../assets/Haze.svg";

export const getHeaderIcons = (weather) => {
   switch (weather.toLowerCase()) {
      case "rain":
         return Rain;
      case "clouds":
         return Cloud;
      case "sun":
         return Sun;
      case "haze":
         return Haze;
      default:
         return Sun;
   }
};

export const getHourlyIcons = (weather) => {
   switch (weather.toLowerCase()) {
      case "rain":
         return RainIcon;
      case "clouds":
         return CloudIcon;
      case "sun":
         return SunIcon;
      default:
         return SunIcon;
   }
};

export const cardIcons = (type) => {
   switch (type.toLowerCase()) {
      case "visibility":
         return Visibility;
      case "temperature":
         return Temperature;
      case "windspeed":
         return WindSpeed;
      case "aqua":
         return Aqua;
      case "humidity":
         return Humidity;
      case "pressure":
         return Pressure;
      case "sunrise":
         return Sunrise;
      case "sunset":
         return Sunset;
      default:
         return Visibility;
   }
};
