import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState('');
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "07cbc546bc1fbca68202298f671c0a2c";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            console.log(data);
            let result = {
                city: city,
                temp: data.main.temp,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
            }
            console.log(result);
            return result;
        }
        catch (error) {
            throw error;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity('');
            let result = await getWeatherInfo({ updateInfo });
            updateInfo(result);
        }
        catch (error) {
            setError(true);
        }
    }

    return (
        <>
        
        <div className="searchBox">
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city-name" label="City Name" variant="standard" required value={city} onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">
                    Send
                </Button>
                {error && <p>City not found</p>}
            </form>
        </div>
        </>
    )
}

