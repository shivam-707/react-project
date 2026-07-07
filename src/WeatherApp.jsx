import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "Shimla",
        feelslike: 21.21,
        temp: 22.2,
        tempMin: 20.2,
        tempMax: 25.2,
        humidity: 60,
        pressure: 1013,
        weather: "Clear",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}