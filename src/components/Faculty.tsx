import React from "react";
import teacher1 from "../assets/img/teacher1.jpg";
import teacher2 from "../assets/img/teacher2.jpg";
import teacher3 from "../assets/img/teacher3.jpg";
import teacher4 from "../assets/img/teacher4.jpg";
import teacher5 from "../assets/img/teacher5.jpg";
import founder from "../assets/img/founder.jpg";
import teacher6 from "../assets/img/teacher7.jpeg";
const faculty = [
	{
		name: "Shital Rajendra Lokhande",
		role: "Teacher",
		image: teacher1,
		bio: "BE Computer",
		address:
			"Hemraj Engineering Classes 1st floor,Behind sagar sweet near vidya Vikas circle gangapur road",
	},
	{
		name: "Anjali Vijay More",
		role: "Teacher",
		image: teacher2,
		bio: "M.A.Bed",
		address:
			"Bright Munchkins International Pre-school 34,sundarban colony, Behind Roongta Bella Vista, Bhujbal farm road, Govind Nagar, Nashik.",
	},
	{
		name: "Archana Sudhir Lokhande",
		role: "Teacher",
		image: teacher3,
		bio: "BA",
		address:
			"Bhavishya kids plot 25, Opposite metrozone,Dnyaneshwar nagar Pathardi phata.",
	},
	{
		name: "Priti Pankaj Karan",
		role: "Teacher",
		image: teacher4,
		bio: "BE (Computer)",
		address: "Karan kutir bungalow Champa nagri Jail road, Canal road, Nashik",
	},
	{
		name: "Nayana Bhalerao",
		role: "Teacher",
		image: teacher5,
		bio: "B.C.A",
		address:
			"Mould Gold pre-Schhol Sr. No. 266, plot no. 116, Near krushna Pooja Textile, Dindori Road, Mhasrul ,Nashik-422004",
	},
	{
		name: "Ritika Pawar",
		role: "Teacher",
		image: teacher6,
		bio: "B.Com",
		address: "plot 25, Opposite metrozone,Dnyaneshwar nagar . Pathardi phata",
	},
];

export default function Faculty() {
	return (
		<section className="py-20 bg-gray-200" id="faculty">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Title */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Meet Our Faculty
					</h2>
					<p className="text-xl text-gray-600">
						Learn from industry experts and renowned academics
					</p>
				</div>

				{/* Founder */}
				<div className="flex flex-col items-center mb-16">
					<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition group text-center">
						<img
							src={founder}
							alt="Pallavi Bachhav"
							className="w-full h-64 object-contain group-hover:scale-105 transition duration-300"
						/>
						<h3 className="text-xl font-semibold text-gray-900 mb-1">
							Pallavi Bachhav
						</h3>
						<p className="text-indigo-600 mb-2">Founder of Eternal Classes</p>
						<p className="text-gray-600 text-sm">
							7+ years of experience in abacus and handwriting expert
						</p>
						<p className="text-gray-500 text-sm mt-2">
							Nashik, Maharashtra, India
						</p>
					</div>
				</div>

				{/* Faculty Members */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{faculty.map((member, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-lg hover:shadow-xl transition group"
						>
							<div className="relative">
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-64 object-contain group-hover:scale-105 transition duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-1">
									{member.name}
								</h3>
								<p className="text-indigo-600 mb-2">{member.role}</p>
								<p className="text-gray-600 text-sm">{member.bio}</p>
								<p className="text-gray-500 text-sm mt-2">{member.address}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
