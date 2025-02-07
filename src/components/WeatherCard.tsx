import React from 'react';
import { Sun, Wind, Droplet } from 'lucide-react';

interface WeatherCardProps {
    weather: {
      name: string;
      main: {
        temp: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
      };
      weather: {
        main: string;
      }[];
      wind: {
        speed: number;
      };
      sys: {
        sunrise: number;
        sunset: number;
      };
    };
}
  
const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
    const { name, main, weather: weatherDetails, sys, wind } = weather;
    const { temp, temp_max, temp_min, humidity } = main;
    const { sunrise, sunset } = sys;
    const condition = weatherDetails?.[0]?.main || "Unknown";

    const formatTime = (timestamp: number) => {
      return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
  
    return (
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-xl">{condition}</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-extrabold">{Math.round(temp)}°C</h1>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {/* Temperature */}
          <div className="flex items-center">
            <Sun className="mr-2" />
            <div>
              <p className="text-sm">Max: {Math.round(temp_max)}°C</p>
              <p className="text-sm">Min: {Math.round(temp_min)}°C</p>
            </div>
          </div>
          {/* Wind & Sunrise/Sunset */}
          <div className="flex items-center">
            <Wind className="mr-2" />
            <div>
              <p className="text-sm">Wind: {wind.speed} m/s</p>
              <p className="text-sm">Sunrise: {formatTime(sunrise)}</p>
              <p className="text-sm">Sunset: {formatTime(sunset)}</p>
            </div>
          </div>
          {/* Humidity */}
          <div className="flex items-center">
            <Droplet className="mr-2" />
            <div>
              <p className="text-sm">Humidity: {humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default WeatherCard;
