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
              <p>DATE</p>
              <img
                src={`https://openweathermap.org/payload/api/media/file/${day.weather[0].icon}.png`}
                alt="weather icon"
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
