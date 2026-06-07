import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 35.6895, lon: 139.6917 }),
  });
  return <>{JSON.stringify(data)}</>;
}

export default App;
