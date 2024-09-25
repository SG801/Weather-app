import { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

const App = () => {
  const [weather, setWeather] = useState<{ city: string; temperature: number; description: string } | null>(null);
  const [error, setError] = useState<string>('');
  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a3c1f169a12c468fa35131213241109&q=${city}&aqi=no`);
      if (!response.ok) {
        throw new Error('City not found'); // Handle HTTP errors
      }
      const data = await response.json();
      setWeather({
        city: data.location.name,
        temperature: data.current.temp_c,
        description: data.current.condition.text,
      });
      setError('');
    } catch (error) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };
  return (
    <div>
      <h1>Trojan Slayers' Weather App</h1>
      <SearchForm onSearch={fetchWeather} />
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Inline error message */}
      {weather && (
        <WeatherInfo
          city={weather.city}
          temperature={weather.temperature}
          description={weather.description}
        />
      )}
      <br />
      <iframe
        src="https://open.spotify.com/embed/playlist/3PfgEI3kro8dwe3NE2Nknv?utm_source=generator"
        width="100%"
        height="100"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
  );
};
export default App;













