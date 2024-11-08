import React from "react";
import { Linkedin, Mail } from "lucide-react";
import Footer from "./Footer";
import teacher1 from "../assets/img/teacher1.jpg";
import teacher2 from "../assets/img/teacher2.jpg";
import teacher3 from "../assets/img/teacher3.jpg";
import teacher4 from "../assets/img/teacher4.jpg";
import teacher5 from "../assets/img/teacher5.jpg";

import founder from "../assets/img/founder.jpg";
const faculty = [
	{
		name: "Pallavi Bachhav.",
		role: " Founder of Eternal classes.",
		image: founder,
		bio: "20+ years of experience in AI and Machine Learning",
	},
	{
		name: "Prof. Michael Chen",
		role: "Teacher",
		image: teacher1,
		bio: "BE Computer",
	},
	{
		name: "Dr. Emily Williams",
		role: "Teacher",
		image: teacher2,
		bio: "M.A.Bed",
	},
	{
		name: "Prof. David Kim",
		role: "Teacher",
		image: teacher3,
		bio: "BA",
	},
	{
		name: "Prof. David Kim",
		role: "Teacher",
		image: teacher4,
		bio: "BE(Computer)",
	},
	{
		name: "Prof. David Kim",
		role: "Teacher",
		image: teacher5,
		bio: "B.C.A",
	},
];

export default function Faculty() {
	return (
		<>
			<section className="py-20 bg-white" id="faculty">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Meet Our Faculty
						</h2>
						<p className="text-xl text-gray-600">
							Learn from industry experts and renowned academics
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{faculty.map((member, index) => (
							<div
								key={index}
								className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group"
							>
								<div className="relative">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-64 object-scale-down object-center group-hover:scale-105 transition duration-300"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-gray-900 mb-1">
										{member.name}
									</h3>
									<p className="text-indigo-600 mb-2">{member.role}</p>
									<p className="text-gray-600 text-sm mb-4">{member.bio}</p>
									<div className="flex space-x-4">
										<a
											href={member.linkedin}
											className="text-gray-600 hover:text-indigo-600 transition"
										>
											<Linkedin className="w-5 h-5" />
										</a>
										<a
											href={`mailto:${member.email}`}
											className="text-gray-600 hover:text-indigo-600 transition"
										>
											<Mail className="w-5 h-5" />
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</>
	);
}
