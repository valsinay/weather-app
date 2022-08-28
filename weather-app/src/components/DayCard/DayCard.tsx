import { useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { checkWeatherIcon } from "../../helper/helper";
import HourlyCard from "../HourlyCard/HourlyCard";

const DayCard = ({ day, icon, description, forecast }: any) => {
  let weatherIcon = checkWeatherIcon(icon, description);
  const [isExpanded, setIsExpanded] = useState(false);

  
  const highestTemp = forecast.weather.map((x: any) => {
    return Math.max(x.main.temp_max);
  });
  const lowestTemp = forecast.weather.map((x: any) => {
    return Math.min(x.main.temp_min);
  });
  const checkIsToday =
    new Date(forecast.data.dt_txt).toDateString() === new Date().toDateString();

  return (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      <div>
        <div className="bg-white text-[#757575] font-normal h-[55px] rounded-[15px] mx-[15px] mt-[5px] w-full border border-transparent hover:cursor-pointer hover:border hover:border-blue-500 ease-out duration-100">
          <div className="flex items-center   h-full  justify-between px-3">
            <div className="flex items-center ">
              <div className="text-[37px]">{weatherIcon}</div>
              <label className="pl-2 font-medium text-black">
                {checkIsToday ? "Today" : day}
              </label>
            </div>
            <div className="flex items-center ">
              <label className="text-black">{description}</label>
              <label className="pl-2 text-[#757575] flex items-center">
                <span className="font-medium">
                  {parseInt(Math.max(...highestTemp).toString())} 
                </span><TbTemperatureCelsius />{" "}/{" "}
             {parseInt(Math.min(...lowestTemp).toString())} <TbTemperatureCelsius />
              </label>
            </div>
          </div>
        </div>
        <div
          className={`flex mx-[15px] transition-height ease-[ease-in-out] duration-[0.5s]   overflow-hidden  ${
            isExpanded ? "h-32" : "h-0"
          }`}
        >
          {forecast.weather.map((x: any) => {
            return (
              <HourlyCard
                key={x.dt}
                dateHours={x.dt_txt}
                temp={x.main.temp}
                icon={x.weather[0].main}
                displayNow={false}
              />
            );
          })}
        </div>
      </div>
    </button>
  );
};

export default DayCard;
