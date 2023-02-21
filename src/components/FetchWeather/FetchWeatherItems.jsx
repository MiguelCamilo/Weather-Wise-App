

export default function FetchWeatherItems({main,temp,icon,description,city,humidity,speed }) {
	return (
		<>
			<section className="container mx-auto flex flex-col items-center content-center justify-center">
				<p className="font-bold">{city}</p>
				<div className="flex flex-row-reverse">

					<p className="mt-12 ml-2 font-extrabold text-[3em]">{temp}</p>
					<img
						src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
						alt={description}
						className="w-[10em] h-[10em]"
					/>
				</div>
				<p className="font-extrabold text-[23px] tracking-wide">{description}</p>

				{/* weather data container */}
				<div className="flex flex-row space-x-20">
					{/* humidity container */}
					<div className="flex flex-col">
						<p className="mt-5 text-zinc-400">Humidity</p>
						<p className="text-center mt-3">{humidity} %</p>
					</div>
					{/* wind speed container */}
					<div className="flex flex-col">
						<p className="mt-5 text-zinc-400">Wind speed</p>
						<p className="text-center mt-3">{Math.round(speed)} mph</p>
					</div>
				</div>
			</section>
		</>
	);
}
