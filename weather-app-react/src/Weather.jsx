import { useState } from "react";
import Search from "./search";
function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    function handleSearch() {
        fetchWeatherData(search);
    }
    async function fetchWeatherData(param) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=bb12cc2cb95bfc4c62d9f2c5d2ce30e3`);
            const data = await response.json();
            console.log(data, "data");
        }
        catch (e) {
            console.log(e);
        }
    }

    return (<div>
        <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
        ></Search>
        Weather
    </div>);
}
export default Weather;
