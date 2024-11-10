import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing
import reward1 from "../assets/img/reward1.jpg";
import reward2 from "../assets/img/reward2.jpg";
import reward3 from "../assets/img/reward3.jpg";
import reward4 from "../assets/img/reward4.jpg";
import reward5 from "../assets/img/reward5.jpg";
import reward6 from "../assets/img/reward6.jpg";
import reward7 from "../assets/img/reward7.jpg";
import reward8 from "../assets/img/reward8.jpg";
import reward9 from "../assets/img/reward9.jpg";

const slides = [
	{
		image: reward1,
	},
	{
		image: reward2,
	},
	{
		image: reward3,
	},
	{
		image: reward4,
	},
	{
		image: reward5,
	},
	{
		image: reward6,
	},
	{
		image: reward7,
	},
	{
		image: reward8,
	},
	{
		image: reward9,
	},
];

export default function Hero() {
	const [currentSlide, setCurrentSlide] = React.useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	React.useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<h2 className="text-5xl font-bold text-center bg-gray-200 text-gray-800">
				Our Achievements
			</h2>
			<div
				className="relative h-[50vh] bg-gray-200 w-full overflow-hidden"
				id="home"
			>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						<div className="absolute inset-0 bg-black/4 z-10" />
						<img
							src={slide.image}
							className="object-scale-down w-full h-full"
						/>
						<div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4"></div>
					</div>
				))}

				<button
					onClick={prevSlide}
					className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
				>
					<ChevronLeft className="w-6 h-6 text-white" />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
				>
					<ChevronRight className="w-6 h-6 text-white" />
				</button>

				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-2 h-2 rounded-full transition ${
								index === currentSlide ? "bg-white" : "bg-white/50"
							}`}
						/>
					))}
				</div>
			</div>
		</>
	);
}
