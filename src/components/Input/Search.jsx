import { useState } from "react";

export default function Search({ onSubmit }) {
	const [city, setCity] = useState("");

	const handleCity = (e) => {
		setCity(e.target.value);
	};

	const handleForm = (e) => {
		e.preventDefault();
		// using the getData prop we will pass the city
		// input back to the FetchWeather component
		onSubmit(city);
	};

	return (
		<>
			<div>
				<form onSubmit={handleForm}>
					<input
						type="text"
						placeholder="Search a City"
						className="border-2 border-solid rounded-lg mb-5 placeholder:text-center placeholder:text-[15px] placeholder:italic text-orange-400 border-blue-400 hover:border-blue-800n text-center drop-shadow-xl"
						value={city}
						required
						onChange={handleCity}
					/>
					<button
						className="ml-2 bg-blue-300 py-1 px-1 rounded-lg text-white hover:-translate-x-0.5 hover:-translate-y-0.5 duration-300"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
		</>
	);
}
