import Aditionsallinfo from "./components/cards/Aditionsallinfo.tsx";
import CurrentWeather from "./components/cards/CurrentWeather.tsx";
import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Aditionsallinfo />
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
}

export default App;
