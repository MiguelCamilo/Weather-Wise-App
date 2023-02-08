export default function FetchWeatherItems({ main, temp, icon, description }) {
	return (
		<>
			<section className="container mx-auto flex flex-col items-center content-center justify-center">
				<div className="text-black">{main}</div>
				<div className="text-black">{temp}</div>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                <p>{description}</p>
			</section>
		</>
	);
}
