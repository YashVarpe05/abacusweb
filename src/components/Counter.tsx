import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const ScrollTriggeredCounter = () => {
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, []);

	const stats = [
		{ number: 7, label: "Years of Experience" },
		{ number: 5, label: "Centre in India" },
		{ number: 4000, label: "Students Learned" },
	];

	return (
		<div ref={containerRef} className="max-w-6xl mx-auto py-12">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{stats.map((stat, index) => (
					<div key={index} className="text-center p-4">
						<div className="text-4xl font-bold text-gray-800 mb-2">
							{isVisible && (
								<CountUp
									start={0}
									end={stat.number}
									duration={2.5}
									separator=","
									suffix="+"
									decimal=","
									enableScrollSpy={true}
									scrollSpyOnce={true}
								/>
							)}
						</div>
						<div className="text-indigo-700 font-medium">{stat.label}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ScrollTriggeredCounter;
