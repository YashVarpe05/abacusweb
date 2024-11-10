import React from "react";
import reward1 from "../assets/img/reward1.jpg";
import reward2 from "../assets/img/reward2.jpg";
import reward3 from "../assets/img/reward3.jpg";
import reward4 from "../assets/img/reward4.jpg";
import reward5 from "../assets/img/reward5.jpg";
import reward6 from "../assets/img/reward6.jpg";
import reward7 from "../assets/img/reward7.jpg";
import reward8 from "../assets/img/reward8.jpg";
import reward9 from "../assets/img/reward9.jpg";
import Footer from "./Footer";

const Achievements = () => {
	const achievements = [
		{
			id: 1,
			imageUrl: reward1,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},
		{
			id: 2,
			imageUrl: reward2,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},
		{
			id: 3,
			imageUrl: reward3,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},
		{
			id: 4,
			imageUrl: reward4,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},
		{
			id: 5,
			imageUrl: reward5,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},
		{
			id: 6,
			imageUrl: reward6,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},
		{
			id: 7,
			imageUrl: reward7,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},
		{
			id: 8,
			imageUrl: reward8,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},
		{
			id: 9,
			imageUrl: reward9,
			title: "Award Ceremony 2023",
			description: "Recognized for outstanding performance.",
		},

		// Add more achievements here
	];

	return (
		<>
			<section id="achievements" className="py-12 bg-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
					<h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
						Our Achievements
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{achievements.map((achievement) => (
							<div
								key={achievement.id}
								className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl"
							>
								<img
									src={achievement.imageUrl}
									alt={achievement.title}
									className="w-full h-56 object-scale-down"
								/>
								<div className="p-4">
									<h3 className="text-lg font-semibold text-gray-900">
										{achievement.title}
									</h3>
									<p className="text-gray-600">{achievement.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</>
	);
};

export default Achievements;
