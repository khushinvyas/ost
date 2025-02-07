import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { WeatherData } from './types/weather'
import { fetchWeatherData } from './utils/api'
import { getStoredWeather, storeWeather } from './utils/storage'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const data = await fetchWeatherData(city)
      if (!data || !data.name) {
        throw new Error('Invalid city name or no data available')
      }
      setWeather(data)
      storeWeather(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data')
    } finally {
      setLoading(false) // Ensures loading stops even if there's an error
    }
  }

  useEffect(() => {
    const storedWeather = getStoredWeather()
    if (storedWeather && storedWeather.name) {
      setWeather(storedWeather)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <LoadingSpinner />}
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  )
}

export default App
