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
import reward10 from "../assets/img/reward10.jpeg";
import abacusbg from "../assets/img/clssroomimg.jpeg";
const slides = [
	{
		image: reward1,
		title: "Welcome to Eternal Classes",
		subtitle:
			"Eternal Classes offers the best course with the concepts of quality training and better understanding",
	},
	{
		image: reward2,
		title: "World-Class Education",
		subtitle: "Scripting Elegance, Crafting Character",
	},
	{
		image: reward3,
		title: "Innovation Hub",
		subtitle: "Where Ideas Come to Life",
	},
	{
		image: reward4,
		title: "Eternal Classes",
		subtitle: "Empowering Minds, Shaping Futures",
	},
	{
		image: reward5,
		title: "Eternal Classes",
		subtitle: "Unlocking Potential, Inspiring Excellence",
	},
	{
		image: reward6,
		title: "Eternal Classes",
		subtitle: "Where Learning Meets Innovation",
	},
	{
		image: reward7,
		title: "Eternal Classes",
		subtitle: "Transforming Education, Transforming Lives",
	},
	{
		image: reward8,
		title: "Eternal Classes",
		subtitle: "Nurturing Talent, Building Leaders",
	},
	{
		image: reward9,
		title: "Eternal Classes",
		subtitle: "Excellence in Education, Excellence in Life",
	},
	{
		image: reward10,
		title: "Eternal Classes",
		subtitle: "Empowering Minds, Enriching Lives",
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
							className="object-scale-down w-full h-full"
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
			<div className="relative bg-gray-50 py-16 px-8 md:px-16 lg:px-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
					{/* Text Content */}
					<div className="space-y-6">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							Empower Minds with Abacus Mastery
						</h2>
						<p className="text-lg md:text-xl text-gray-700">
							Discover the joy of learning math and mental skills with our
							expert-led classes designed for every age. Let’s unlock potential
							and build confidence together.
						</p>
						<div className="flex space-x-4">
							<Link
								to="/contact"
								className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
							>
								Start Learning
							</Link>
							<Link
								to="/programs"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md border border-indigo-600 hover:bg-gray-100 transition"
							>
								View Programs
							</Link>
						</div>
					</div>

					{/* Visual Content */}
					<div className="relative">
						<div className="absolute inset-0 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
						<img
							src={abacusbg} // Replace with your abacus image
							alt="Abacus Learning"
							className="relative w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
