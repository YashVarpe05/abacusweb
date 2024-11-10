// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Faculty from "./components/Faculty";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import About from "./components/About";
import CourseDetail from "./components/CourseDetail"; // Import the CourseDetail component
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import imageUrl from "./assets/img/bannerad.jpg";
import Counter from "./components/Counter";
import Achievementsslider from "./components/Achievementsslider";
const App: React.FC = () => {
	return (
		<Router>
			<div className="min-h-screen bg-gray-200">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Hero />
								<Programs />
								<Counter />
								<Faculty />
								{/* <Achievements /> */}
								<Achievementsslider />
								<Footer />
							</>
						}
					/>
					<Route path="/programs" element={<Programs />} />
					<Route path="/faculty" element={<Faculty />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/achievements" element={<Achievements />} />
					<Route path="/about" element={<About />} />
					{/* Define a dynamic route for course details */}
					<Route path="/course/:courseId" element={<CourseDetail />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
