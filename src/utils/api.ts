import { WeatherData } from '../types/weather'

const API_KEY = '40c5c5d09aa735334aeb32f78f9e3bb3'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export async function fetchWeatherData(city: string): Promise<WeatherData> {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  )
  if (!response.ok) {
    throw new Error('Weather data fetch failed')
  }
  return response.json()
}


