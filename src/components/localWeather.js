import React, { useContext } from "react";
import weatherContext from "../context";

function LocalWeather() {
  const data = useContext(weatherContext);
  return (
    <>
      {data.weatherData && (
        <div className="grid grid-cols-2 gap-10">
          <div className="block p-6 bg-[#05BFDB] bg-opacity-50 rounded-xl shadow ">
            <h5 className="mb-2 text-2xl font-bold text-white">
              LOCAL WEATHER REPORT
            </h5>
            <div className="font-normal grid grid-cols-2 justify-center text-center">
              <img
                src={`http://openweathermap.org/img/w/${data.weatherData.list[0].weather[0].icon}.png`}
                alt=""
                className="w-full h-full"
              />
              <div className="text-white flex flex-col justify-center text-2xl">
                <div>{data.weatherData.city.name}</div>
                <div>{data.weatherData.list[0].weather[0].description}</div>
              </div>
              <div>{data.weatherData.list[0].wind.speed} m/s</div>
              <div className="text-xl grid grid-cols-1 justify-center">
                <div>
                  {(data.weatherData.list[0].main.temp - 273.15).toFixed(0)}
                  °C
                </div>
                <div>
                  {(
                    (data.weatherData.list[0].main.temp - 273.15) * 1.8 +
                    32
                  ).toFixed(2)}
                  °F
                </div>
              </div>
            </div>
          </div>
          <div className="block p-6 bg-[#05BFDB] bg-opacity-50 rounded-xl shadow ">
            <h5 className="mb-2 text-2xl font-bold text-white">
              SEA FORECAST REPORT
            </h5>
            <div className="font-normal grid grid-cols-2 justify-center text-center">
              <table className="">
                <thead>
                  <tr>
                    <th scope="col">Product name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Apple </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LocalWeather;
