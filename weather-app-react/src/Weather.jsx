import { useEffect, useState } from "react";
import Search from "./search";
function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    function handleSearch() {
        fetchWeatherData(search);
    }
    function getCurrentDate(){
        return new Date().toLocaleDateString('en-us',{
            weekday:'long',
            month:'long',
            day:'numeric',
            year:'numeric'
        })
    }
    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=bb12cc2cb95bfc4c62d9f2c5d2ce30e3`);
            const data = await response.json();
            console.log(data, "data");
            if(data){
                setWeatherData(data);
                setLoading(false);
            }
        }
        catch (e) {
            setLoading(false);
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchWeatherData("delhi");
    },[]);
    console.log(weatherData);

    return (<div className="App">
        <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
        ></Search>
        {
            loading? <div>Loading...</div>:
            <div className="display-content">
                <div className="city-name">
                <h2>{weatherData?.name},<span>{weatherData?.sys?.country}</span></h2>
                </div>
                <div className="date">
                    <span>Date: {getCurrentDate()}</span>
                </div>
                <div>Temperature: 
                    {weatherData?.main?.temp}
                </div>
                <div className="description">
                    {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ""}
                </div>
                <div className="weather-info">
                    <div className="wind"> Wind Speed is {weatherData?.wind?.speed}</div>
                    <div className="humidity"> Humidity is {weatherData?.main?.humidity}%</div>
                </div>
            </div>
        }
        
    </div>);
}
export default Weather;
