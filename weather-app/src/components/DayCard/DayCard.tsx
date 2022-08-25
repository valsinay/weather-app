
import { checkWeatherIcon } from "../../helper/helper";

const DayCard = ({ day, temp_min, temp_max, icon, description }: any) => {
  let weatherIcon = checkWeatherIcon(icon);

  return (
    <div className="bg-white text-[#757575] font-normal h-[55px] rounded-[15px] mx-[15px] my-[5px] w-full ">
      <div className="flex items-center   h-full  justify-between px-3">
        <div className="flex items-center ">
          <div className="text-[37px]">{weatherIcon}</div>
          <label className="pl-2 font-medium text-black">{day}</label>
        </div>
        <div className="flex items-center ">
          <label className="text-black">{description}</label>
          <label className="pl-2 text-[#757575]">
            {Math.round(temp_max)}°C 
          </label>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
