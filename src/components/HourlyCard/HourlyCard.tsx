import { TbTemperatureCelsius } from "react-icons/tb";
import { checkWeatherIcon } from "../../helper/helper";

export interface IHourlyCard {
  dateHours: string;
  temp: number;
  icon: string;
  displayNow: boolean;
}

const HourlyCard = ({ dateHours, temp, icon, displayNow }: IHourlyCard) => {
  let weatherIcon = checkWeatherIcon(icon, icon);

  const checkSameDate =
    new Date(dateHours).getHours() <= new Date().getHours() &&
    new Date().getDate() === new Date(dateHours).getDate();

  return (
    <div className="bg-white text-[#757575] font-normal h-[120px] w-[75px]  rounded-[15px] mx-[15px] my-[5px]">
      <div className="flex items-center flex-col  justify-evenly h-full ">
        <label>
          {checkSameDate && displayNow ? (
            "Now"
          ) : (
            <>{new Date(dateHours).getHours() + ":00"}</>
          )}
        </label>
        <div className="text-[37px]">{weatherIcon}</div>

        <label className="flex">
          {parseInt(temp.toString())} <TbTemperatureCelsius color="#757575" />
        </label>
      </div>
    </div>
  );
};

export default HourlyCard;
