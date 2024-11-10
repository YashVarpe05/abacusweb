import React from "react";
import {
	FaChalkboardTeacher,
	FaBuilding,
	FaGlobeAmericas,
	FaUniversity,
} from "react-icons/fa";
import aboutsusbanner from "../assets/img/about-us-page.png";
import vision from "../assets/img/vision.webp";
import mission from "../assets/img/mission.png";
import faculty from "../assets/img/reward4.jpg";
import Infrastructure from "../assets/img/infrastructure.avif";
import Opportunities from "../assets/img/Opportunities1.jpg";
import Footer from "./Footer";

const About: React.FC = () => {
	return (
		<>
			<section className="bg-gray-200 py-16 px-8">
				<div className="max-w-screen-xl mx-auto text-center space-y-16">
					{/* Section Header with Background Image */}
					<div
						className="relative mb-16 bg-cover bg-center h-96 rounded-xl"
						style={{
							backgroundImage: `url(${aboutsusbanner})`, // Replace with a real campus image
						}}
					>
						<div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
						<h2 className="relative text-4xl font-extrabold text-white z-10 pt-32">
							About Us
						</h2>
						<p className="relative text-xl text-white z-10 mt-4">
							Where learning meets innovation and excellence
						</p>
					</div>

					{/* Mission & Vision with Split Layout */}
					<div className="grid md:grid-cols-2 gap-12 mb-16">
						<div className="md:col-span-1 space-y-6">
							<h3 className="text-2xl font-semibold text-gray-800">
								Our Mission
							</h3>
							<p className="text-lg text-gray-600">
								To empower young minds with the essential skills of mental
								arithmetic and beautiful handwriting, fostering confidence,
								discipline, and a lifelong love for learning.
							</p>
							<div className="mt-6">
								<img
									src={mission} // Replace with a relevant image
									alt="Mission Image"
									className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
								/>
							</div>
						</div>
						<div className="md:col-span-1 space-y-6">
							<h3 className="text-2xl font-semibold text-gray-800">
								Our Vision
							</h3>
							<p className="text-lg text-gray-600">
								Be the first choice "Eternal classes"
							</p>
							<div className="mt-6">
								<img
									src={vision} // Replace with a relevant image
									alt="Vision Image"
									className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
								/>
							</div>
						</div>
					</div>

					{/* Core Values with Interactive Hover Effects */}
					<div className="space-y-8 mb-16">
						<h3 className="text-3xl font-semibold text-gray-900">
							Our Core Values
						</h3>
						<div className="grid md:grid-cols-3 gap-12">
							<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
								<FaChalkboardTeacher className="text-4xl text-blue-600 mb-4" />
								<h4 className="text-xl font-semibold text-gray-800 mb-4">
									Quality Education
								</h4>
								<p className="text-lg text-gray-600">
									We prioritize high-quality, hands-on learning experiences that
									foster critical thinking and creativity.
								</p>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
								<FaBuilding className="text-4xl text-green-600 mb-4" />
								<h4 className="text-xl font-semibold text-gray-800 mb-4">
									State-of-the-Art Facilities
								</h4>
								<p className="text-lg text-gray-600">
									Our campus is equipped with cutting-edge facilities that
									encourage exploration, creativity, and growth.
								</p>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
								<FaGlobeAmericas className="text-4xl text-orange-600 mb-4" />
								<h4 className="text-xl font-semibold text-gray-800 mb-4">
									Global Connections
								</h4>
								<p className="text-lg text-gray-600">
									With an extensive global network of alumni, we open doors to
									international opportunities and collaborations.
								</p>
							</div>
						</div>
					</div>

					{/* Collaboration Highlight Section */}
					<div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg mt-16 space-y-6">
						<h3 className="text-3xl font-semibold">
							Collaborating to Wonder Kidz
						</h3>
						<p className="text-lg">
							<strong>Eternal Classes</strong> has partnered with{" "}
							<strong>Wonder Kidz</strong> to nurture and empower young learners
							through engaging activities and workshops.
						</p>
						<p className="text-lg">
							This collaboration provides children with opportunities to grow,
							learn, and explore their creative potential, demonstrating our
							shared commitment to building a brighter future.
						</p>
						<div className="flex flex-wrap justify-center items-center gap-8 mt-8">
							<div className="text-center">
								<p className="text-lg font-medium">Wonder Kidz</p>
							</div>
						</div>
					</div>

					{/* Why Choose Us? With Icon Buttons */}
					<div className="space-y-12">
						<h3 className="text-3xl font-semibold text-gray-900 mb-8">
							Why Choose Us?
						</h3>
						<div className="grid md:grid-cols-3 gap-12">
							<div className="relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
								<img
									src={faculty} // Replace with a real image
									alt="Experienced Faculty"
									className="w-full rounded-lg mb-4"
								/>
								<div className="absolute top-0 right-0 m-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
									<FaUniversity />
								</div>
								<h4 className="text-2xl font-semibold text-gray-800 mb-4">
									Expert Faculty
								</h4>
								<p className="text-lg text-gray-600">
									Learn from the best educators who are experts in their fields,
									bringing years of industry and research experience.
								</p>
							</div>
							<div className="relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
								<img
									src={Infrastructure} // Replace with a real image
									alt="Modern Campus"
									className="w-full rounded-lg mb-4"
								/>
								<div className="absolute top-0 right-0 m-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm">
									<FaBuilding />
								</div>
								<h4 className="text-2xl font-semibold text-gray-800 mb-4">
									Modern Infrastructure
								</h4>
								<p className="text-lg text-gray-600">
									Our campus is designed to foster collaboration, creativity,
									and learning with modern classrooms and labs.
								</p>
							</div>
							<div className="relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
								<img
									src={Opportunities} // Replace with a real image
									alt="Global Network"
									className="w-full rounded-lg mb-4"
								/>
								<div className="absolute top-0 right-0 m-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
									<FaGlobeAmericas />
								</div>
								<h4 className="text-2xl font-semibold text-gray-800 mb-4">
									Networking Opportunities
								</h4>
								<p className="text-lg text-gray-600">
									Connect with a vast network of alumni and professionals around
									the world.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default About;
