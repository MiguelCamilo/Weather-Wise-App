import { useState } from "react";

export default function Search({ onSubmit }) {
	const [city, setCity] = useState('');

	const handleCity = (e) => {
		setCity(e.target.value);
	};

	const handleForm = (e) => {
		e.preventDefault();
		// using the getData prop we will pass the city 
		// input back to the FetchWeather component
		onSubmit(city)
	};

	return (
		<>
			<div>
				<form onSubmit={handleForm}>
					<input
						type="text"
						placeholder="Search City"
						className="border-2 border-solid rounded-lg mb-5 placeholder:text-center border-blue-400 hover:border-blue-800"
						value={city}
						required
						onChange={handleCity}
					/>
					<button className="ml-2 bg-blue-300 p-1 px-2 rounded-lg text-white" type="submit">Search</button>
				</form>
			</div>
		</>
	);
}
