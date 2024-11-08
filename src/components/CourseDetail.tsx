import abacusImage from "/src/assets/img/360_F_66101698_E6pVObW2WsQcAa56eFOJpI54BFbCDkGI.webp";
import abacus1 from "../assets/img/abacus1.jpg";
import abacus2 from "../assets/img/abacus2.jpg";
import abacus3 from "../assets/img/abacus3.jpg";
import handwritingImage from "../assets/img/handwritting.webp";
import handwriting1 from "../assets/img/handwriting1.jpg";
import handwriting2 from "../assets/img/handwriting2.jpg";
import handwriting3 from "../assets/img/handwriting3.jpg";
import { useParams } from "react-router-dom";
import { useState } from "react"; // Correct usage for React hooks

const courseData = {
	abacus: {
		id: 1,
		title: "Abacus",
		description: `The ABACUS course is designed for children aged 4 to 13, enhancing brain development, focus, and mathematical skills. The curriculum covers operations like addition, subtraction, multiplication, division, and decimal counting.`,
		highlights: [
			"9 levels, 3 months per level",
			"Weekly 2-hour sessions",
			"Boosts concentration and calculation speed",
			"Covers negative number operations",
			"Abacus is totally Brain Development Scores",
			"Photographic Memory",
			"Creativity (1 min timers speed writing, Random calling, Flash Cards, Oral Sums)",
			"Concentration (only 4 finger)",
			"Self-Confidence (table, *, /)",
			"Speed & Accuracy (8 min, 10 min)",
			"Time Management (3 min, 5 min)",
			"20% to 30% study Growth",
		],
		image: abacusImage,
		additionalImages: [abacus1, abacus2, abacus3],
	},
	"handwriting-improvement": {
		id: 2,
		title: "Handwriting Improvement Course",
		description: `The Handwriting Improvement Course focuses on enhancing writing skills, including cursive, script, and speed writing techniques. This course is designed to improve legibility, speed, and the overall appearance of handwriting, providing benefits in academic, professional, and personal communication.`,
		highlights: [
			"Cursive, script, and speed handwriting training",
			"Interactive sessions with personalized coaching",
			"Improves academic and professional communication",
		],
		image: handwritingImage,
		additionalImages: [handwriting1, handwriting2, handwriting3],
	},
};

export default function CourseDetail() {
	const { courseId } = useParams();
	const course = courseData[courseId];

	const [isContactModalOpen, setContactModalOpen] = useState(false);

	if (!course) {
		return (
			<div className="max-w-4xl mx-auto p-8">
				<h2 className="text-3xl font-bold mb-4">Course not found</h2>
				<p className="text-lg text-gray-700">
					We're sorry, but the course you're looking for could not be found.
				</p>
			</div>
		);
	}

	return (
		<>
			<div className="max-w-5xl mx-auto p-8 bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg">
				{/* Course Header */}
				<div className="flex flex-col lg:flex-row items-center lg:space-x-8 mt-28">
					<img
						src={course.image}
						alt={course.title}
						className="w-full lg:w-1/2 h-auto mb-6 lg:mb-0 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
					/>
					<div className="lg:w-1/2">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							{course.title}
						</h2>
						<p className="text-lg text-gray-600 mb-6">{course.description}</p>
					</div>
				</div>

				{/* Additional Images Section */}
				<div className="mt-10">
					<h3 className="text-2xl font-semibold text-gray-800 mb-4">
						Explore More About the Course
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{course.additionalImages &&
							course.additionalImages.map((imgSrc, index) => (
								<img
									key={index}
									src={imgSrc}
									alt={`Image ${index + 1}`}
									className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
								/>
							))}
					</div>
				</div>

				{/* Highlights Section */}
				<div className="mt-10">
					<h3 className="text-2xl font-semibold text-gray-800 mb-4">
						Course Highlights
					</h3>
					<ul className="list-disc pl-5 space-y-2 text-gray-700">
						{course.highlights.map((highlight, index) => (
							<li key={index} className="transition hover:text-indigo-600">
								{highlight}
							</li>
						))}
					</ul>
				</div>

				{/* Contact Us Button */}
				<div className="contact-us mt-10">
					<button
						onClick={() => setContactModalOpen(true)}
						className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
					>
						Contact Us
					</button>
				</div>

				{/* Contact Modal */}
				{isContactModalOpen && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
						<div className="bg-white rounded-lg p-6 w-full max-w-md">
							<h3 className="text-2xl font-bold mb-4">Contact Us</h3>
							<form>
								<div className="mb-4">
									<label className="block text-gray-700 mb-1">Name</label>
									<input
										type="text"
										className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
										placeholder="Your Name"
									/>
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 mb-1">Email</label>
									<input
										type="email"
										className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
										placeholder="Your Email"
									/>
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 mb-1">Message</label>
									<textarea
										className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
										placeholder="Your Message"
									></textarea>
								</div>
								<div className="flex justify-end">
									<button
										type="button"
										onClick={() => setContactModalOpen(false)}
										className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
			{/* <Footer /> */}
		</>
	);
}
