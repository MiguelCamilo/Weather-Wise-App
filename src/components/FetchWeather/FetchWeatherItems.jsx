export default function FetchWeatherItems({
	main,
	temp,
	icon,
	description,
	city,
}) {
	return (
		<>
			<section className="container mx-auto flex flex-col items-center content-center justify-center">
				<p>{city}</p>
				<div className="flex flex-row-reverse">
					<p className="mt-8">{temp}</p>
					<img
						src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
						alt={description}
					/>
				</div>
				<p>{description}</p>
			</section>
		</>
	);
}
