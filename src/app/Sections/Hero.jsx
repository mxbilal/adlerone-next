"use client"
import React from "react";

import StarFilledIcon from "../../assets/icons/star-filled.svg";
import { HeroImage } from "../../assets/images/index";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";

import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion";

const Hero = React.forwardRef((props, ref) => {
	const navigator = useRouter();

	const popAnimation = {
		hidden: {
			scale: 0.9,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 10,
			},
		},
	};

	/* const popAnimationWithDelay = {
		...popAnimation,
		hidden: {
			...popAnimation.hidden,
			transition: {
				...popAnimation.hidden.transition,
				delay: 0, // half-second delay
			},
		},
	}; */

	return (
		<div ref={ref}>
			<div className="anchor-section">
				<section id="hero" className="hero">
					<motion.div
						className="hero-content"
						variants={popAnimation}
						initial="hidden"
						animate="visible"
					>
						<div className="hero-inner-content">
							<Badge
								icon={StarFilledIcon?.src}
								text="The only service provider you’ll need"
								alt="star icon highlighting USP"
							/>
							<h1 className="bold gray-800">
								Empowering{" "}
								<span className="primary">Business Growth</span>{" "}
								Through Virtual Excellence
							</h1>
							<p className="lg-regular gray-500">
								Precision-driven services for startups poised
								for success. Elevate your operations with Adler
								One
							</p>
						</div>

						<div className="hero-btns">
							<Button
								label="Book a Strategy Call"
								type="primary"
								size="lg"
								onClick={() => {
									navigator.push("/schedule");
								}}
							/>
							<Button
								label="Discover Services"
								type="secondary"
								size="lg"
								onClick={() => {

									typeof window !== 'undefined' ? window.location.href = "#services" : "";
								}}
							/>
						</div>
					</motion.div>
					<motion.img
						className="hero-img"
						src={HeroImage?.src}
						alt="image of a man looking directly at you"
						variants={popAnimation}
						initial="hidden"
						animate="visible"
					/>
				</section>
			</div>
		</div>
	);
});

export default Hero;
