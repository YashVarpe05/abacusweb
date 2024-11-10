import React, { useState, ChangeEvent, FormEvent } from "react";
import Footer from "./Footer";
interface FormData {
	name: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form Data Submitted:", formData);
		alert("Thank you for reaching out!");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<>
			<div className="max-w-3xl mx-auto  p-6 bg-gray-200 shadow-md rounded-lg mb-24">
				<div className="mt-24">
					<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="name" className="block text-gray-700">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-700">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="block text-gray-700">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={4}
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
