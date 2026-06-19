import Aditionsallinfo from "./components/cards/Aditionsallinfo.tsx";
import CurrentWeather from "./components/cards/CurrentWeather.tsx";
import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";
import Map from "./components/Map.tsx";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Map></Map>
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
      <Aditionsallinfo />
    </div>
  );
}

export default App;
