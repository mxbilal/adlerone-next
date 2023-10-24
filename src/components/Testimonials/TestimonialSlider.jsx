import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Testimonials.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const TestimonialCard = ({ heading, text, name, title, avatar }) => {
	return (
		<div className="testimonialCard">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="37"
				height="27"
				viewBox="0 0 37 27"
				fill="none"
			>
				<path
					d="M16.6805 0.5L11.222 18.4069L9.07762 10.3775C11.6336 10.3775 13.6913 11.0784 15.2509 12.4804C16.8538 13.8824 17.6552 15.8366 17.6552 18.3431C17.6552 20.8072 16.8321 22.7827 15.1859 24.2696C13.583 25.7565 11.5469 26.5 9.07762 26.5C6.6083 26.5 4.55054 25.7565 2.90433 24.2696C1.30144 22.7827 0.5 20.8072 0.5 18.3431C0.5 17.6634 0.543321 16.9837 0.629964 16.3039C0.759928 15.6242 0.998195 14.7958 1.34477 13.8186C1.73466 12.8415 2.29783 11.567 3.0343 9.9951L7.58303 0.5H16.6805ZM35.5253 0.5L30.0668 18.4069L27.9224 10.3775C30.4783 10.3775 32.5361 11.0784 34.0957 12.4804C35.6986 13.8824 36.5 15.8366 36.5 18.3431C36.5 20.8072 35.6769 22.7827 34.0307 24.2696C32.4278 25.7565 30.3917 26.5 27.9224 26.5C25.4531 26.5 23.3953 25.7565 21.7491 24.2696C20.1462 22.7827 19.3448 20.8072 19.3448 18.3431C19.3448 17.6634 19.3881 16.9837 19.4747 16.3039C19.6047 15.6242 19.843 14.7958 20.1895 13.8186C20.5794 12.8415 21.1426 11.567 21.8791 9.9951L26.4278 0.5H35.5253Z"
					fill="#AD1A33"
				/>
			</svg>

			<div className="testimonial-text">
				<h6 className="semibold gray-900">{heading}</h6>
				<p className="md-regular gray-500">{text}</p>
			</div>

			<div className="client-info">
				<img src={avatar?.src} alt="" className="client-avatar" />
				<div className="client-text">
					<p className="md-semibold gray-900">{name}</p>
					<p className="sm-regular gray-600">{title}</p>
				</div>
			</div>
		</div>
	);
};

const TestimonialSlider = ({ testimonials }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1); // 1 for right, -1 for left

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<div className="testimonial-slider">
			<AnimatePresence mode="wait">
				{testimonials && testimonials[currentIndex] && (
					<motion.div
						key={currentIndex}
						initial={{ x: 300 * direction, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -300 * direction, opacity: 0 }}
						transition={{
							type: "spring",
							stiffness: 5000,
							damping: 200,
							duration: 0.1, // adjust this value to change the speed
						}}
						className="testimonial"
					>
						<TestimonialCard
							heading={testimonials[currentIndex].heading}
							text={testimonials[currentIndex].text}
							name={testimonials[currentIndex].name}
							title={testimonials[currentIndex].title}
							avatar={testimonials[currentIndex].avatar}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="testimonial-buttons">
				<button onClick={handlePrev}>
					<FeatherIcon icon="chevron-left" />
				</button>
				<button onClick={handleNext}>
					<FeatherIcon icon="chevron-right" />
				</button>
			</div>
		</div>
	);
};

export default TestimonialSlider;
export { TestimonialCard, TestimonialSlider };
