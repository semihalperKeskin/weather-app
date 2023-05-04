import React, { useEffect, useState } from "react";
import LocalWeather from "./components/localWeather";
import WeeklyReport from "./components/weeklyReport";
import axios from "axios";
import weatherContext from "./context";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios.get(process.env.REACT_APP_API_URL)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  console.log(weatherData);
  
  const data = {
    weatherData,
  };

  return (
    <weatherContext.Provider value={data}>
      <div className="mx-[20%]">
        <h1 className="text-center text-5xl mt-[2em] border-b-2 mb-10">WEATHER TEMPLATE</h1>
        <LocalWeather />
        <WeeklyReport />
      </div>
    </weatherContext.Provider>
  );
}

export default WeatherApp;
