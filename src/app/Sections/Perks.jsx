import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
	PerkIcon1,
	PerkIcon2,
	PerkIcon3,
	PerkIcon4,
} from "../../assets/images/index";
import CenterHeading from "../../components/CenterHeading/CenterHeading";

const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

const PerkCard = ({ title, text, icon, alt, i }) => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1, // Trigger when 10% of element is in view
	});

	return (
		<motion.div
			className="perk-card"
			variants={fadeUp}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			ref={inViewRef}
			transition={{
				type: "spring",
				damping: 100,
				stiffness: 5000,
				duration: 0.2,
				delay: i * 0.1, // staggered delay for each card
			}}
		>
			<img
				src={icon}
				className="perk-icon"
				alt={alt}
				style={{
					marginBottom: "0.25rem",
				}}
			/>

			<h5
				className="semibold gray-700"
				style={{
					width: "100%",
				}}
			>
				{title}
			</h5>
			<p className="md-normal gray-500">{text}</p>
		</motion.div>
	);
};

export default function Perks() {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1, // Trigger when 10% of element is in view
	});

	return (
		<section
			className="perks"
			style={{
				overflow: "hidden",
			}}
		>
			<motion.div
				ref={inViewRef}
				variants={fadeUp}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				transition={{
					type: "spring",
					damping: 20,
					stiffness: 100,
					delay: 0.0, // slightly delayed appearance for heading
				}}
			>
				<CenterHeading
					title="Discover the Adler One Edge"
					subtitle="Expertise, Customization, and ROI: The Pillars of Your Unmatched Success"
				/>
			</motion.div>
			<div className="perks-content">
				<PerkCard
					title="Proven Success Record"
					text="With Adler One, success isn't aspirational—it's our history. We've consistently elevated businesses to surpass their objectives and redefine excellence."
					icon={PerkIcon1?.src}
					alt="adler one proven success record"
					i={0}
				/>
				<PerkCard
					title="Our Professional Team"
					text="Consider our team as yours—driven by your success. We offer a blend of expertise, standing by not just as service providers but as genuine growth partners."
					icon={PerkIcon2?.src}
					alt="alder one professional team"
					i={1}
				/>
				<PerkCard
					title="Tailored Solutions"
					text="We believe in bespoke strategies, not one-size-fits-all. Our methods are crafted to resonate with your unique business goals, ensuring a distinct path to success."
					icon={PerkIcon3?.src}
					alt="adlerone tailored solutions"
					i={2}
				/>
				<PerkCard
					title="Maximized ROI"
					text="Beyond just cost-efficiency, we ensure value with every dollar spent. Our services amplify returns, ensuring that your partnership with us truly pays off."
					icon={PerkIcon4?.src}
					alt="adlerone maximized roi"
					i={3}
				/>
			</div>
		</section>
	);
}

export { PerkCard };
