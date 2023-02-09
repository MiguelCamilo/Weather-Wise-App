import Search from "../Input/Search";
import Time from "../Time/Time";
import FetchWeatherItems from "./FetchWeatherItems";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { API } from "../../secrets";

export default function FetchWeather() {
	const [weather, setWeather] = useState();
	const [message, setMessage] = useState(`☀️  ⛈️  ☔️  🌨️ 🌤️ ❄️`);
	const [cityName, setCityName] = useState();

	const API_KEY = API.api;

	// this will get the data from
	// from the Search component
	const getData = (city) => {
		setCityName(city);
	};

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
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
		setTimeout(() => {
			if (cityName) {
				setMessage(image);
				fetch(url)
					.then((res) => {
						if (res.status === 404) { // if city name does not match data base then setMessage
							setMessage(`404: Hmmm that city couldn't be found🤔`)
							return
						}
						return res.json()
					})
					.then(setWeather)
					.catch((err) => console.error(`Error: ${err}`));
			}
		},1000);
	}, [cityName]);

	return (
		<div className="bg-[#e3e9f0] min-h-screen flex flex-col items-center justify-center">
			<div className="bg-white flex flex-col justify-center items-center md:w-[33rem] md:h-[43rem] w-[20rem] h-[45rem] rounded-xl ">
				<Header />
				{/* since we are passing in a parameter to this
					func the same parameter should be used here	*/}
				<Search onSubmit={(city) => getData(city)} />
				<Time />
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
							humidity={weather.main.humidity}
							speed={weather.wind.speed}
						/>
					)}
				</div>
				<Footer />
			</div>
		</div>
	);
}
