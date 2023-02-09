export default function Time() {
	const date = new Date();
	const month = date.toLocaleString("default", { month: "long" });
	const day = date.getDate();
	const year = date.getFullYear();
	const dayName = date.toLocaleDateString("default", { weekday: "short" });

	const showTime = () => {
		const currentTime = new Date();
		return currentTime.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<>
			<p className="mb-5 font-semibold bg-blue-300 p-3 rounded-lg text-white drop-shadow-lg hover:drop-shadow-xl hover:-translate-x-0.5 hover:-translate-y-0.5 duration-300">
				{showTime()}, {dayName} {`${month} ${day}, ${year}`}
			</p>
		</>
	);
}
