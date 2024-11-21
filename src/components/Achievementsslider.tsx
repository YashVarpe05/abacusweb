import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing
import tour1 from "../assets/img/tour1.jpeg";
import tour2 from "../assets/img/tour2.jpeg";
import tour3 from "../assets/img/tour3.jpeg";
import tour4 from "../assets/img/tour4.jpeg";
import classroomimg1 from "../assets/img/classroomimg2.jpeg";
import classrooming2 from "../assets/img/clssroomimg.jpeg";
const slides = [
	{
		image: tour1,
	},
	{
		image: tour2,
	},
	{
		image: tour3,
	},
	{
		image: tour4,
	},
	{
		image: classroomimg1,
	},
	{
		image: classrooming2,
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
				Our Tours
			</h2>
			<div
				className="relative h-[80vh] bg-gray-200 w-full overflow-hidden"
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
						<img src={slide.image} className="object-contain w-full h-full" />
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
