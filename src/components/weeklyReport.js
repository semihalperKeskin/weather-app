import React, { useContext } from "react";
import weatherContext from "../context";

function WeeklyReport() {
  const data = useContext(weatherContext);
  const dataSlice = data.weatherData && data.weatherData.list.slice(0, 40);



  function dayFormat(item){
    const options = { weekday: 'long' };
    const dateParts = item.split(/[- :]/); 
    const dateObject = new Date(Date.UTC(dateParts[0], dateParts[1]-1, dateParts[2], dateParts[3], dateParts[4], dateParts[5]));
    const day = dateObject.toLocaleString('tr-TR', options);
    return day;
  }
  return (
    <div className="grid grid-cols-5 gap-2 mt-10">
      {data.weatherData &&
        dataSlice.map((item, index) => {
          if(dataSlice[index-1] && dataSlice[index-1].dt_txt.split(" ")[0] !== item.dt_txt.split(" ")[0])
          {
            console.log(item.dt_txt);
          return (
            <div
              className="block p-6 h-full bg-[#05BFDB] bg-opacity-50 rounded-xl shadow "
              key={index}
            >
              <h3 className="grid justify-center text-center" >{dayFormat(item.dt_txt)}</h3>
              <img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt=""
                className="mx-auto"
              />
              <div className="font-normal grid grid-cols-1 justify-center text-center">
                <div className="text-xl grid grid-cols-1 justify-center">
                  <div>
                    {(item.main.temp - 273.15).toFixed(0)}
                    °C
                  </div>
                  <div>
                    {((item.main.temp - 273.15) * 1.8 + 32).toFixed(2)}
                    °F
                  </div>
                </div>
              </div>
            </div>
          );
        }
        })}
    </div>
  );
}

export default WeeklyReport;
