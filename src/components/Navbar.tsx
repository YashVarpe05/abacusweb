import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import logo from "../assets/img/logo.png";
const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed w-full bg-white shadow-lg z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="flex items-center">
							<img
								src={logo}
								className="h-20 w-auto max-h-16 object-contain"
								alt=""
							></img>
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-8">
						<Link to="/" className="text-gray-600 hover:text-indigo-600">
							Home
						</Link>
						<Link
							to="/programs"
							className="text-gray-600 hover:text-indigo-600"
						>
							Programs
						</Link>
						<Link to="/faculty" className="text-gray-600 hover:text-indigo-600">
							Faculty
						</Link>
						<Link
							to="/achievements"
							className="text-gray-600 hover:text-indigo-600"
						>
							Achievements
						</Link>
						<Link to="/about" className="text-gray-600 hover:text-indigo-600">
							About
						</Link>
						<Link to="/contact" className="text-gray-600 hover:text-indigo-600">
							<button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
								Contact Now
							</button>
						</Link>
					</div>
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-600"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
						<Link
							to="/"
							className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
						>
							Home
						</Link>
						<Link
							to="/programs"
							className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
						>
							Programs
						</Link>
						<Link
							to="/faculty"
							className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
						>
							Faculty
						</Link>
						<Link
							to="/achievements"
							className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
						>
							Achievements
						</Link>
						<Link
							to="/about"
							className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
						>
							About
						</Link>

						<Link
							to="/contact"
							className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
						>
							<button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition">
								Apply Now
							</button>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
