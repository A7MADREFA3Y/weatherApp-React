import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card.tsx";
import { getWeather } from "../../api.ts";

type Props = {};

export default function CurrentWeather({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 35.6895, lon: 139.6917 }),
  });
  return <Card title="CurrentWeather"> CurrentWeather</Card>;
}
