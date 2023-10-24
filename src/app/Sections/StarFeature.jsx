import React from "react";
import Point from "../../components/Point/Point";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'
import "./sections.css";
import renderTextWithBreaks from "../../services/addLineBreaks";
import SizedBox from "../../components/SizedBox/SizedBox";
import Divider from "../../components/Divider/Divider";

const fadeInUp = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			damping: 20,
			stiffness: 100,
		},
	},
};

export default function StarFeature({
	image,
	alt,
	title,
	text,
	points,
	buttonLabel,
	topSpace = true,
}) {
	const navigator = useRouter();
	const [inViewRef, inView] = useInView({
		triggerOnce: true, // Only trigger once
		threshold: 0.1, // Trigger when 10% of element is in view
	});

	return (
		<motion.section
			variants={fadeInUp}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			ref={inViewRef}
			className="star"
			style={{
				marginTop: topSpace ? "3rem" : "0rem",
			}}
		>
			<div className="star-content">
				<img src={image} alt={alt} className="star-img" />
				<div className="star-inner-content">
					<h2 className="bold white">{title}</h2>
					{text && (
						<p className="lg-normal white">
							{renderTextWithBreaks(text)}
						</p>
					)}

					{points && <Divider color={"bg-gray-600"} />}

					{points && (
						<div className="points">
							{points.map((point, index) => (
								<Point
									key={index}
									text={point.text}
									boldText={point.boldText}
									dark={true}
								/>
							))}
						</div>
					)}
					{buttonLabel && <SizedBox height={"0.1rem"} />}

					{buttonLabel && (
						<Button
							label={buttonLabel}
							type="primary"
							size="lg"
							onClick={() => {
								navigator.push("/schedule");
							}}
						/>
					)}
				</div>
			</div>
		</motion.section>
	);
}
