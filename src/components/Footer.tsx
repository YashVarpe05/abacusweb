import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{/* Logo and Description */}
				<div className="space-y-4">
					<h2 className="text-3xl font-bold">
						<img
							src={Logo}
							className="footer-logo max-w-[150px] mx-auto"
							alt="logo"
						/>
					</h2>
					<p className="text-gray-200 text-lg">
						Scripting Elegance , Crafting Characters
					</p>
					<div className="flex space-x-4">
						{/* Social Icons */}
						<a
							href="#"
							className="text-white hover:text-gray-300 transition duration-300"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							href="#"
							className="text-white hover:text-gray-300 transition duration-300"
						>
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href="#"
							className="text-white hover:text-gray-300 transition duration-300"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a
							href="#"
							className="text-white hover:text-gray-300 transition duration-300"
						>
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div className="space-y-4">
					<h3 className="text-lg font-semibold">Quick Links</h3>
					<div>
						<ul className="space-y-2">
							<li>
								<Link
									to="/about"
									className="hover:text-gray-300 transition duration-300"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/programs"
									className="hover:text-gray-300 transition duration-300"
								>
									Programs
								</Link>
							</li>
							<li>
								<Link
									to="/achievements"
									className="hover:text-gray-300 transition duration-300"
								>
									Achievements
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:text-gray-300 transition duration-300"
								>
									Contact Us
								</Link>
							</li>
						</ul>
						<p className="text-sm">
							© {new Date().getFullYear()} Your Company Name. All rights
							reserved.
						</p>
					</div>
				</div>

				
				{/* Contact Information */}
				<div className="space-y-4">
					<h3 className="text-xl font-semibold">Contact Us</h3>
					<ul className="space-y-2 text-gray-200">
						<li>
							<p>
								📍 Address: Shop no 118, Prabhu Atlantis Rameshwar Nagar, Behind
								Wisdom High School, Ganagapur Road, Nashik.
							</p>
						</li>
						<li>
							<p>📞 Phone: +91 88888 93087</p>
						</li>
						<li>
							<p>📧 Email: pal.watpde@gmail.com</p>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="mt-1     border-t border-gray-500 pt-6 text-center">
				<p className="text-gray-200 text-sm">
					© 2024 Eternal classes. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}
