import { getWeather } from "../../api.ts";
import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import WeatherIcon from "./WeatherIcon.tsx";

type Props = {};

export default function HourlyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 35.6895, lon: 139.6917 }),
  });

  return (
    <Card
      title="Hourly Forecast (48 Hourly)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data.hourly.map((hour) => (
        <div className="flex flex-col gap-2 items-center">
          <p className="whitespace-nowrap">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
              hour12: false,
            })}
          </p>
          <WeatherIcon src={hour.weather[0].icon} />
          <p>{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  );
}
