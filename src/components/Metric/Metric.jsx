import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Metric = ({ digit, label, post = " " }) => {
	const [count, setCount] = useState(0);
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: 1 });

		let start = 0;
		const end = digit;
		const duration = 500; // duration for the entire count-up in ms
		const stepTime = Math.abs(Math.floor(duration / (end - start)));

		const timer = setInterval(() => {
			start++;
			setCount(start);
			if (start === end) clearInterval(timer);
		}, stepTime);

		return () => clearInterval(timer); // Clear the timer if the component is unmounted
	}, [digit, controls]);

	return (
		<div className="metric">
			<motion.h3 className="bold white" animate={controls}>
				{count}
				{post}
			</motion.h3>
			<p className="metric-label">{label}</p>
		</div>
	);
};

export default Metric;
