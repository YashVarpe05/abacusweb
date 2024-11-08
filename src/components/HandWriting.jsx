import React, { useState } from "react";
import { useParams } from "react-router-dom";

const courseData = {
	"handwriting-improvement": {
		title: "Handwriting Improvement Course",
		description: `The Handwriting Improvement Course focuses on enhancing writing skills, including cursive, script, and speed writing techniques. This course is designed to improve legibility, speed, and the overall appearance of handwriting, providing benefits in academic, professional, and personal communication.`,
		highlights: [
			"Cursive, script, and speed handwriting techniques",
			"Personalized coaching and interactive sessions",
			"Develops faster and more legible handwriting",
			"Boosts confidence and communication effectiveness",
		],
		image: "/path/to/handwriting-image.jpg", // Replace with your image path
		additionalImages: [
			"/src/assets/img/abacus1.jpg", // Example paths
			"/src/assets/img/abacus2.jpg",
			"/src/assets/img/abacus3.jpg",
		],
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
		<div className="max-w-5xl mx-auto p-8 bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg ">
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
								alt={`Abacus Image ${index + 1}`}
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
	);
}
