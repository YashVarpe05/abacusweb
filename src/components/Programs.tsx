// src/components/Programs.jsx
import React from "react";
import { BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const programs = [
	{
		id: "abacus", // Unique identifier for routing
		title: "Abacus",
		description: "Abacus is totally Brain Development Scores",
		icon: BookOpen,
		stats: { duration: "3 Months", students: "150+", placement: "95%" },
	},
	{
		id: "handwriting-improvement", // Unique identifier for routing
		title: "Handwriting Improvement Course",
		description: "Cursive Handwriting, Script Handwriting, Speed Handwriting",
		icon: Users,
		stats: { duration: "20 days", students: "150+", placement: "92%" },
	},
];

export default function Programs() {
	return (
		<>
			<section className="py-20 bg-gray-50" id="programs">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Our Programs
						</h2>
						<p className="text-xl text-gray-600">
							Discover your path to success with our diverse range of programs
						</p>
					</div>
					<div className="flex justify-center">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols gap-8">
							{programs.map((program) => (
								<div
									key={program.id}
									className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition group"
								>
									<div className="flex justify-center mb-4">
										<program.icon className="w-12 h-12 text-indigo-600 group-hover:scale-110 transition" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										{program.title}
									</h3>
									<p className="text-gray-600 mb-4">{program.description}</p>
									<div className="border-t pt-4">
										<div className="flex justify-between text-sm">
											<span className="text-gray-500">
												Duration: {program.stats.duration}
											</span>
											<span className="text-gray-500">
												Students: {program.stats.students}
											</span>
										</div>
									</div>
									<Link to={`/course/${program.id}`}>
										<button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
											Learn More
										</button>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</>
	);
}
