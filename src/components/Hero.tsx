import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing

const slides = [
	{
		image:
			"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80",
		title: "Welcome to Eternal Classes",
		subtitle:
			"Eternal Classes offers the best course with the concepts of quality training and better understanding",
	},
	{
		image:
			"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
		title: "World-Class Education",
		subtitle: "Scripting Elegance , Crafting Character",
	},
	{
		image:
			"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80",
		title: "Innovation Hub",
		subtitle: "Where Ideas Come to Life",
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
		<div className="relative h-screen w-full overflow-hidden" id="home">
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
						index === currentSlide ? "opacity-100" : "opacity-0"
					}`}
				>
					<div className="absolute inset-0 bg-black/50 z-10" />
					<img
						src={slide.image}
						alt={slide.title}
						className="object-cover w-full h-full"
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
						<h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
							{slide.title}
						</h1>
						<p className="text-xl md:text-2xl mb-8 animate-fade-in">
							{slide.subtitle}
						</p>
						<div className="flex space-x-4">
							<Link
								to="/programs" // Navigate to Programs page
								className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition"
							>
								Explore Programs
							</Link>
							<Link
								to="/about" // Navigate to About page
								className="bg-white text-indigo-600 px-8 py-3 rounded-md hover:bg-gray-100 transition"
							>
								Learn More
							</Link>
						</div>
					</div>
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
	);
}
