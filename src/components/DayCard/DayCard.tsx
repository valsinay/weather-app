import { useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { checkWeatherIcon } from "../../helper/helper";
import HourlyCard from "../HourlyCard/HourlyCard";

export interface IDayCard {
  day: string;
  icon: string;
  description: string;
  forecast: any;
}

const DayCard = ({ day, icon, description, forecast }: IDayCard) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let weatherIcon = checkWeatherIcon(icon, description);

  const highestTemp = forecast.weather.map(
    (el: { main: { temp_max: number } }) => {
      return Math.max(el.main.temp_max);
    }
  );
  const lowestTemp = forecast.weather.map(
    (el: { main: { temp_min: number } }) => {
      return Math.min(el.main.temp_min);
    }
  );

  const checkDateIsToday =
    new Date(forecast.data.dt_txt).toDateString() === new Date().toDateString();

  return (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      <div>
        <div className="bg-white text-[#757575] font-normal h-[55px] rounded-[15px] mx-[15px] mt-[5px] w-full border border-transparent hover:cursor-pointer hover:border hover:border-blue-500 ease-out duration-100">
          <div className="flex items-center   h-full  justify-between px-3">
            <div className="flex items-center ">
              <div className="text-[37px]">{weatherIcon}</div>
              <label className="pl-2 font-medium text-black">
                {checkDateIsToday ? "Today" : day}
              </label>
            </div>
            <div className="flex items-center ">
              <label className="text-black">{description}</label>
              <label className="pl-2 text-[#757575] flex items-center">
                <span className="font-medium flex  mr-1">
                  {parseInt(Math.max(...highestTemp).toString())}
                  <TbTemperatureCelsius />
                </span>
                /
                <span className="flex  ml-1">
                  {parseInt(Math.min(...lowestTemp).toString())}
                  <TbTemperatureCelsius color="#757575" />
                </span>
              </label>
            </div>
          </div>
        </div>
        <div
          className={`flex mx-[15px] transition-height ease-[ease-in-out] duration-[0.5s] overflow-hidden  ${
            isExpanded ? "h-32" : "h-0"
          }`}
        >
          {forecast.weather.map(
            (el: {
              dt: string;
              dt_txt: string;
              main: { temp: number };
              weather: { main: string }[];
            }) => {
              return (
                <HourlyCard
                  key={el.dt}
                  dateHours={el.dt_txt}
                  temp={el.main.temp as number}
                  icon={el.weather[0].main}
                  displayNow={false}
                />
              );
            }
          )}
        </div>
      </div>
    </button>
  );
};

export default DayCard;
