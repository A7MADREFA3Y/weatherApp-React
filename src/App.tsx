import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
}

export default App;
