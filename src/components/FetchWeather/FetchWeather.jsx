import Search from "../Input/Search";
import Button from "../Button/Button";
import Time from "../Time/Time";
import FetchWeatherItems from "./FetchWeatherItems";
import { useState, useEffect } from "react";
import { API } from "../../secrets";

export default function FetchWeather() {
	const [weather, setWeather] = useState();
	const [message, setMessage] = useState();

	const API_KEY = API.api;
	const CITY_NAME = "Miami";
	//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=imperial`;
	const image = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6 animate-spin"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
			/>
		</svg>
	);

	useEffect(() => {
		setMessage(image);
		fetch(url)
			.then((res) => res.json())
			.then(setWeather)
			.catch((err) => console.error(err));
	}, [weather]);

	return (
		<div className="bg-[#e3e9f0] min-h-screen flex flex-col items-center justify-center">
			<div className="bg-white flex flex-col justify-center items-center md:w-[40rem] md:h-[40rem] w-[22rem] h-[22rem] rounded-xl ">
				<Search />
				<Time />
				<Button getWeather={() => setWeather} />
				<div className="flex justify-center">
					{!weather ? (
						<h2 className="mt-5">{message}</h2>
					) : (
						<FetchWeatherItems
							city={weather.name}
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
