import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Faculty from "./components/Faculty";
import CourseDetail from "./components/CourseDetail"; // Import the CourseDetail component

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-white">
				<Navbar />
				<Routes>
					{/* Main route showing the homepage components */}
					<Route
						path="/"
						element={
							<>
								<Hero />
								<Programs />
								<Faculty />
							</>
						}
					/>
					{/* Route for the course detail page */}
					<Route path="/course/:courseId" element={<CourseDetail />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
