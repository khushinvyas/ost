interface WeatherIconProps {
  condition: string
}

const WeatherIcon = ({ condition }: WeatherIconProps) => {
  const getIconClass = () => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return '☀️'
      case 'clouds':
        return '☁️'
      case 'rain':
        return '🌧️'
      case 'snow':
        return '❄️'
      default:
        return '🌤️'
    }
  }

  return <div className="text-4xl">{getIconClass()}</div>
}

export default WeatherIcon
