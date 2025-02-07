import { WeatherData } from '../types/weather'

const STORAGE_KEY = 'weather_data'

export function storeWeather(data: WeatherData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function getStoredWeather(): WeatherData | null {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : null
}
