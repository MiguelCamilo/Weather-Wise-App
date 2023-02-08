export default function Button({getWeather}) {
	return (
		<>
			<button onClick={getWeather} className="bg-blue-300 p-1 px-2 rounded-lg text-white font-bold hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-1 hover:-translate-x-1 duration-300">
				Weather
			</button>
		</>
	);
}
