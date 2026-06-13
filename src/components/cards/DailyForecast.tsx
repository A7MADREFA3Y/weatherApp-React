import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api.ts";
import Card from "./Card.tsx";
import WeatherIcon from "./WeatherIcon.tsx";

type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 35.6895, lon: 139.6917 }),
  });
  return (
    <div>
      <Card title="Current weather" childrenClassName="flex flex-col gap-4">
        {data?.daily.map((day) => (
          <div key={day.dt} className="flex justify-between">
            <p className="w-9">
              {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                weekday: "short",
              })}
            </p>
            <WeatherIcon src={day.weather[0].icon} />
            <p> {Math.round(day.temp.day)}°C</p>
            <p className="text-gray-500/75"> {Math.round(day.temp.min)}°C</p>
            <p className="text-gray-500/75"> {Math.round(day.temp.max)}°C</p>
          </div>
        ))}
      </Card>
    </div>
  );
}
