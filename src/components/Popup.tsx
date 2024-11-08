import React, { useState } from "react";
const Popup = ({ imageUrl, onClose }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
				<button
					className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
					onClick={onClose}
				>
					&times; {/* This is a simple "X" symbol for the close button */}
				</button>
				<img src={imageUrl} alt="Popup" className="w-full h-auto rounded-lg" />
			</div>
		</div>
	);
};
export default Popup;
