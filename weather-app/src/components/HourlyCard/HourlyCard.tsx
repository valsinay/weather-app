import { checkWeatherIcon } from "../../helper/helper";

const HourlyCard = ({ dateHours, temp, icon }: any) => {
  let weatherIcon = checkWeatherIcon(icon);

  const checkSameDate =
    new Date(dateHours).getHours() <= new Date().getHours() &&
    new Date().getDate() === new Date(dateHours).getDate();

  return (
    <div className="bg-white text-[#757575] font-normal h-[120px] w-[75px]  rounded-[15px] mx-[15px] my-[5px]">
      <div className="flex items-center flex-col  justify-evenly h-full ">
        <label>
          {!checkSameDate ? (
            <>{new Date(dateHours).getHours() + ":00"}</>
          ) : (
            "Now"
          )}
        </label>
        <div className="text-[37px]">{weatherIcon}</div>

        <label>{Math.round(temp)}°C</label>
      </div>
    </div>
  );
};

export default HourlyCard;
