import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TaskEdit = ({ editBox , setEditBox }) => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

    const closeEdit = () => {
        setEditBox(false);
    }

    const mode = useSelector((state) => state.theme.mode);

  const Weather_API_KEY = import.meta.env.VITE_API_KEY;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError("Unable to fetch location.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
    console.log(location);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (location.lat && location.lon) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${Weather_API_KEY}`
          );
          const data = await response.json();
          setWeather(data);
        } catch (err) {
          setError("Failed to fetch weather data.");
        }
      }
    };
    fetchWeather();
  }, [location]);

  return (
    <div
      className={`mr-10  h-screen w-80 fixed right-0 ${
        editBox ? "block" : "hidden"
      } ${mode === "dark"? "bg-[#2c2c2c]" : "bg-emerald-50"}`}
    >
        <button className="absolute z-10 left-2 top-2 p-1 bg-red-100 text-red-600 rounded-md" onClick={closeEdit}>
            <X/>
        </button>
      {/* weather api */}
      <div className={` mt-12 mx-4 flex flex-col px-4 py-10 shadow-md items-center gap-10 ${mode === "dark"? "bg-[#232323]" : "bg-emerald-50"}`}>
        <h1 className="text-xl text-center font-semibold">
          Check weather today
        </h1>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="search place"
            className={`outline-none p-2 rounded-md ${mode === "dark"? "bg-black/20" : "bg-gray-100"}`}
          />
          <button
            className="p-2 bg-black text-white rounded-md"
            onClick={getLocation}
          >
            Search
          </button>
        </div>
        {weather && (<div className="flex flex-col gap-2 items-center">
          <h2 className="text-xl font-semibold">Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>)}
      </div>
    </div>
  );
};

export default TaskEdit;
