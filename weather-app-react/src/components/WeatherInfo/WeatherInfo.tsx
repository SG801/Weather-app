interface WeatherInfoProps {
    city: string;
    temperature: number;
    description: string;
}

const WeatherInfo = ({ city, temperature, description }: WeatherInfoProps) => {
    return (
        <div>
            <h2>Weather Information for {city}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default WeatherInfo;