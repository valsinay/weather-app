import React from "react";
import { BsCloudDrizzleFill, BsCloudHaze2Fill } from "react-icons/bs";
import {
  IoMdCloudy,
  IoMdRainy,
  IoMdSnow,
  IoMdSunny,
  IoMdThunderstorm,
} from "react-icons/io";

const HourlyCard = ({ dateHours, temp, icon }: any) => {
  let weatherIcon;
  switch (icon) {
    case "Clouds":
      weatherIcon = <IoMdCloudy />;
      break;
    case "Haze":
      weatherIcon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      weatherIcon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case "Clear":
      weatherIcon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case "Drizzle":
      weatherIcon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case "Snow":
      weatherIcon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case "Thunderstorm":
      weatherIcon = <IoMdThunderstorm />;
      break;
  }


  

  return (
    <div className="bg-[#e1e1e1] text-[#757575] font-normal h-[120px] w-[75px] border rounded-[15px] mx-[15px] my-[5px]">
      <div className="flex items-center flex-col justify-center justify-evenly h-full ">
        <label>{new Date(dateHours).getHours()}:00</label>
        <div className="text-[37px]">{weatherIcon}</div>

        <label>{Math.round(temp)}°C</label>
      </div>
    </div>
  );
};

export default HourlyCard;
