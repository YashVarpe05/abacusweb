import React, { useState, ChangeEvent, FormEvent } from "react";
import Footer from "./Footer";

interface FormData {
	name: string;
	email: string;
	contact: string;
	message: string;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		contact: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const { name, email, contact, message } = formData;

		if (email && name && message && contact) {
			try {
				// Send the form data to the Google Script endpoint
				const response = await fetch(
					`https://script.google.com/macros/s/AKfycbwUTsd27Js3saB7Wug6qu6Y-PibH_taltQ40eEjKsfyxH9QrG9nHTliGdZjk3pP6X7z/exec`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
						body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
							email
						)}&contact=${encodeURIComponent(
							contact
						)}&message=${encodeURIComponent(message)}`,
						mode: "no-cors", // Use no-cors mode for Google Apps Script
					}
				);

				// Since no-cors mode will prevent you from getting a successful response directly,
				// you can use a workaround like checking the status or responding based on expected behavior
				if (response.status === 0) {
					setStatusMessage(
						"Thank you for contacting us! We’ll get back to you soon."
					);
					setFormData({ name: "", email: "", contact: "", message: "" });
				} else {
					console.log(response, "response");
					setStatusMessage(
						"There was an issue with your submission. Please try again."
					);
				}
			} catch (error) {
				console.error(error);
				setStatusMessage("An error occurred. Please try again.");
			}
		} else {
			setStatusMessage("Please fill in all the required fields.");
		}

		setLoading(false);
	};

	return (
		<>
			<div className="max-w-3xl mx-auto p-6 bg-gray-200 shadow-md rounded-lg mb-24">
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
							<label htmlFor="contact" className="block text-gray-700">
								Phone Number
							</label>
							<input
								type="text"
								id="contact"
								name="contact"
								value={formData.contact}
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
							disabled={loading}
						>
							{loading ? "Submitting..." : "Send Message"}
						</button>
					</form>
					{statusMessage && (
						<div
							className={`mt-4 text-center ${
								statusMessage.includes("Thank you")
									? "text-green-500"
									: "text-red-500"
							}`}
						>
							{statusMessage}
						</div>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
