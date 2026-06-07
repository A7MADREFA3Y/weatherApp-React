import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/Card.tsx";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 35.6895, lon: 139.6917 }),
  });
  return (
    <div className="flex flex-col gap-8">
    <Card
        title="Current weather">
        {JSON.stringify(data?.current).slice(0,100)}
    </Card>
    <Card
        title="Hourly forcast">
        {JSON.stringify(data?.hourly).slice(0,100)}
    </Card>
    <Card
        title="Daily forcast">
        {JSON.stringify(data?.daily).slice(0,100)}
    </Card>
    </div>
    );

}

export default App;
