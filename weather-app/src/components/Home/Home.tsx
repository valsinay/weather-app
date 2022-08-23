import React, { useEffect, useState } from "react";

import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";
import axios from "axios";
import HourlyCard from "../HourlyCard/HourlyCard";

export interface Weather {
  city: { name: string; country: string };
  list: {
    dt?:number;
    dt_txt: string;
    main: {
      feels_like: number;
      humidity: number;
      temp: number;
      temp_max: number;
      temp_min: number;
      visibility: number;
      wind: { speed: number };
    };
    visibility: number;
    weather: { main: string; description: string; icon: string }[];
    wind: { speed: number };
  }[];
  message: string;
}

const API_KEY = "2ee9e9176b718db0ca63552f88e5814d";

const Home = () => {
  const [data, setData] = useState<Weather>();
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [animate, setAnimate] = useState(false);
  let weatherIcon;

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        getWeather(position.coords.latitude, position.coords.longitude);
      });
    };
    fetchData();
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (location !== "") {
      getCityByName(location);
      setLocation("");
    }

    if (location === "") {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
  };

  const getWeather = (lat: number, long: number) => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`
      )
      .then((res) => {
        // set the data after 1500 ms
        setTimeout(() => {
          setData(res.data);
          // set loading to false
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.response.data.message);
      });
  };

  const getCityByName = async (name: string) => {
    setLoading(true);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${API_KEY}`
      )
      .then((res) => {
        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.response.data.message);
      });

    console.log(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  if (!data) {
    return (
      <div className="w-full h-screen bg-gradientBg  flex flex-col justify-center items-center">
        <div>
          <ImSpinner8 className="text-5xl animate-spin text-white" />
        </div>
      </div>
    );
  }

  switch (data.list[0].weather[0].main) {
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

  const lowestTemp = data?.list.slice(0, 8).map((x) => {
    return Math.min(x.main.temp_min);
  });
  const highestTemp = data?.list.slice(0, 8).map((x) => {
    return Math.max(x.main.temp_max);
  });

  return (
    <div className="w-full h-[100%] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col items-center justify-center px-4 lg:px-0 ">
      {errorMessage && (
        <div className="w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white my-4 lg:top-10 p-4 capitalize rounded-md">{`${errorMessage}`}</div>
      )}

      <form
        className={`${
          animate ? "animate-shake" : "animate-none"
        } h-16 bg-black/30 w-full max-w-[450px]
      rounded-full backdrop-blur-[32px] mb-8`}
      >
        <div className="h-full relative flex items-center justify-between p-2 ">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-normal pl-6 h-full"
            type="text"
            placeholder="Search by city name"
            onKeyPress={(event) =>
              event.key === "Enter" && location !== ""
                ? getCityByName(location)
                : null
            }
          />
          <button
            onClick={(e: React.MouseEvent<HTMLElement>) => handleSubmit(e)}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500  hover:to-fuchsia-600 w-20 h-12 rounded-full flex justify-center items-center transition"
          >
            <IoMdSearch className="text-2xl text-white" />
          </button>
        </div>
      </form>
      <div className="w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ImSpinner8 className="text-white text-5xl animate-spin" />
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-x-5">
              <div className="text-[87px]">{weatherIcon}</div>
              <div>
                <div className="text-2xl font-semibold">
                  {data?.city.name}, {data?.city.country}
                </div>
                <div>
                  {new Date().getUTCDate()}/{new Date().getUTCMonth() + 1}/
                  {new Date().getUTCFullYear()}
                </div>
              </div>
            </div>
            <div className="my-20">
              <div className="flex justify-center items-start">
                <div className="text-[144px] leading-none font-light">
                  {parseInt(data?.list[0].main.temp as any)}
                </div>
                <div className="text-4xl">
                  <TbTemperatureCelsius />
                </div>
              </div>

              <div className="capitalize text-center">
                {data?.list[0].weather[0].description}
              </div>
              <div className="capitalize text-center">
                H:{parseInt(Math.max(...highestTemp).toString())} L:
                {parseInt(Math.min(...lowestTemp).toString())}
              </div>
            </div>

            <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="text-[20px]">
                    <BsEye />
                  </div>
                  <div>
                    Visibility:
                    <span className="ml-2">
                      {(data?.list[0].visibility as number) / 1000} km
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="text-[20px]">
                    <BsThermometer />
                  </div>
                  <div className="flex">
                    Feels like:
                    <div className="flex ml-2">
                      {parseInt(data?.list[0].main.feels_like as any)}
                      <TbTemperatureCelsius />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="text-[20px]">
                    <BsWater />
                  </div>
                  <div>
                    Humidity:
                    <span className="ml-2">
                      {data?.list[0].main.humidity} %
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="text-[20px]">
                    <BsWind />
                  </div>
                  <div>
                    Wind:
                    <span className="ml-2">{data?.list[0].wind.speed} m/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="">
        <label className="font-bold text-2xl text-white">Hourly</label>
        <div className="flex">{data?.list.slice(0, 8).map((x)=>{
         
          return <HourlyCard key={x.dt} dateHours={x.dt_txt} temp={x.main.temp_max} icon={x.weather.map((x)=>x.main).toString()} />
        })}</div>
        
      </div>
    </div>
  );
};

export default Home;
