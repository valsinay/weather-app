export interface IWeather {
    city: { name: string; country: string };
    list: {
      dt?: number;
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