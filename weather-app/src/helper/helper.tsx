import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";

import { BsCloudHaze2Fill, BsCloudDrizzleFill } from "react-icons/bs";

export const checkWeatherIcon = (weatherIcon: any) => {
  switch (weatherIcon) {
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
  return weatherIcon;
};
