import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CenterHeading from "../../components/CenterHeading/CenterHeading";

import { ClientCentricImg, TruestedPartnersImg } from "../../assets/images";
import Divider from "../../components/Divider/Divider";
import Point from "../../components/Point/Point";
import applyOrder from "../../services/applyOrder";

const fadeUp = {
	hidden: { opacity: 0, y: 200 },
	visible: { opacity: 1, y: 0 },
};

const Feature = ({ image, title, text, points, left, alt }) => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1, // Trigger when 10% of element is in view
	});

	return (
		<motion.div
			ref={inViewRef}
			className="feature-container"
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={{
				hidden: { opacity: 0, y: 200 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{
				duration: 0.4,
			}}
		>
			<section className="feature">
				<img
					src={image}
					alt={alt}
					className="feature-img"
					style={{
						order: applyOrder ? (left ? 0 : 1) : 0,
					}}
				/>

				<div className="feature-content">
					<h3 className="bold gray-700">{title}</h3>
					<p className="lg-regular gray-500">{text}</p>
					<Divider />
					{points && (
						<div className="points">
							{points.map((point, index) => (
								<Point
									key={index}
									text={point.text}
									boldText={point.boldText}
									dark={false}
								/>
							))}
						</div>
					)}
				</div>
			</section>
		</motion.div>
	);
};

const Features = React.forwardRef((props, ref) => {
	// console.log("TruestedPartnersImg", TruestedPartnersImg)
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1, // Trigger when 10% of element is in view
	});

	return (
		<div id="why-us" className="features anchor-section" ref={ref}>
			<motion.div
				ref={inViewRef}
				variants={fadeUp}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				transition={{
					delay: 0.3, // slightly delayed appearance for heading
				}}
				style={{
					marginBottom: "3rem",
				}}
			>
				<CenterHeading
					title="Why Choose Us"
					subtitle="Our commitment to putting clients first"
				/>
			</motion.div>
			<Feature
				image={ClientCentricImg?.src}
				title="Our Client Centric Approach"
				text="Our commitment to putting clients first"
				points={[
					{
						boldText: "Transparency: ",
						text: "Our commitment to open and honest communication is unwavering, empowering you every step of the way.",
					},
					{
						boldText: "Proactive Problem Solving: ",
						text: "We anticipate issues before the arise, taking a proactive approach to prevent problems.",
					},
					{
						boldText: "Continuous Improvement: ",
						text: "We continuously seek opportunities to enhance our services and provide even greater value.",
					},
				]}
				alt={"adlerone client centric approach"}
			/>
			<Feature
				image={TruestedPartnersImg?.src}
				title="A Trusted Partner in Success"
				text="We're more than a service provider, we're your trusted success partner

                "
				points={[
					{
						boldText: "Long-term Relationships: ",
						text: "We are not here for short-term gains.",
					},
					{
						boldText: "Customized Solutions: ",
						text: "We tailor our approach to your unique needs, ensuring that the solutions we provide are precisely aligned with your business objectives",
					},
					{
						boldText: "Strategic Insights: ",
						text: "We offer more than services; we provide strategic insights and guidance to help you navigate challenges and seize opportunities",
					},
				]}
				left
				alt={"adler one trusted partners"}
			/>
		</div>
	);
});

export default Features;

export { Feature };
