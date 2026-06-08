import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api.ts";
import Card from "./Card.tsx";

type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 35.6895, lon: 139.6917 }),
  });
  return (
    <div>
      <Card title="Current weather">
        <div className="flex flex-col gap-4">
          {data?.daily.map((day) => (
            <div key={day.dt} className="flex justify-between">
              <p>
                {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                  weekday: "short",
                })}
              </p>
              <img
                className="size-8"
                src={`https://openweathermap.org/payload/api/media/file/${day.weather[0].icon}.png`}
                alt="weather icon"
              />
              <p> {Math.round(day.temp.day)}</p>
              <p className="text-gray-500/75"> {Math.round(day.temp.min)}</p>
              <p className="text-gray-500/75"> {Math.round(day.temp.max)}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
