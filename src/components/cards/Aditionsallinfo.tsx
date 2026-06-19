import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api.ts";

type Props = {};

export default function Aditionsallinfo({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 35.6895, lon: 139.6917 }),
  });
  return (
    <Card
      title="Additional Weather Infos"
      childrenClassName="flex flex-col gap-8"
    >
      {rows.map((row, value) => (
        <div className="flex justify-between" key={value}>
          <span className="text-gray-500">{row.label}</span>
          <span>
            <FormatComponent value={value} number={data.current[value]} />
          </span>
        </div>
      ))}
    </Card>
  );
}

function FormatComponent({ value, number }: { value: string; number: number }) {
  if (value === "sunrise" || value === "sunset")
    return new Date(number * 1000).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  return number;
}
const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
    // Icon: Cloud,
  },
  {
    label: "UV Index",
    value: "uvi",
    // Icon: Uv,
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
    // Icon: Wind,
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
    // Icon: Pressure,
  },
  {
    label: "Sunrise",
    value: "sunrise",
    // Icon: Sunrise,
  },
  {
    label: "Sunset",
    value: "sunset",
    // Icon: Sunset,
  },
] as const;
