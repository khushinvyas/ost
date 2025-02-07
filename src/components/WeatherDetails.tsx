import { WeatherData } from '../types/weather'

interface WeatherDetailsProps {
  weather: WeatherData
}

const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white/10 p-4 rounded-lg">
        <p className="text-sm opacity-70">Humidity</p>
        <p className="text-xl">{weather.main.humidity}%</p>
      </div>
      <div className="bg-white/10 p-4 rounded-lg">
        <p className="text-sm opacity-70">Wind Speed</p>
        <p className="text-xl">{weather.wind.speed} m/s</p>
      </div>
      <div className="bg-white/10 p-4 rounded-lg">
        <p className="text-sm opacity-70">Feels Like</p>
        <p className="text-xl">{Math.round(weather.main.feels_like)}°C</p>
      </div>
      <div className="bg-white/10 p-4 rounded-lg">
        <p className="text-sm opacity-70">Pressure</p>
        <p className="text-xl">{weather.main.pressure} hPa</p>
      </div>
    </div>
  )
}

export default WeatherDetails
