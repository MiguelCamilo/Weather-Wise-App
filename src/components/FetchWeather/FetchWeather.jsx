import { useState, useEffect } from "react";
import { API } from "../../secrets";

import FetchWeatherItems from "./FetchWeatherItems";

export default function FetchWeather() {
	const [weather, setWeather] = useState();
	const [message, setMessage] = useState("Weather in your location:");

	const API_KEY = API.api;
	const CITY_NAME = "Miami";
	//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=imperial`;

	const getWeather = () => {
		setMessage("Loading...");
		setTimeout(() => {
			fetch(url)
				.then((res) => res.json())
				.then(setWeather)
				.catch((err) => console.error(err));
		}, 1000);
	};
	return (
		<div className="bg-[#e3e9f0] min-h-screen flex flex-col items-center justify-center">
			<div className="bg-white flex flex-col justify-center items-center md:w-[30rem] md:h-[30rem] w-[22rem] h-[22rem] rounded-xl ">
				<button
					className="bg-blue-300 p-5 rounded-lg text-white font-bold hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-1 hover:-translate-x-1 duration-300"
					onClick={() => getWeather()}
				>
					Weather
				</button>
				<div className="flex justify-center">
					{!weather ? (
						<h2 className="mt-5">{message}</h2>
					) : (
						<FetchWeatherItems
							main={weather.weather[0].main}
							temp={Math.floor(weather.main.temp)}
							icon={weather.weather[0].icon}
							description={weather.weather[0].description}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
