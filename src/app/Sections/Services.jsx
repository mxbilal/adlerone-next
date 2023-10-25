import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
	AccountingIcon,
	SalesManagementIcon,
	MarketingIcon,
	CustomerSupportIcon,
	WebDesignIcon,
} from "../../assets/images/index";

import CenterHeading from "../../components/CenterHeading/CenterHeading";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'
const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

const SerivceCard = ({ icon, title, text, alt, serviceClicked, i, slug }) => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1, // Trigger when 10% of element is in view
	});
	const navigator = useRouter();
	return (
		<motion.div
			ref={inViewRef}
			variants={fadeUp}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			transition={{
				type: "keyframes",
				/* damping: 8,
				stiffness: 50, */
				duration: 0.1,
				delay: i * 0.2, // staggered delay for each card
			}}
			className="service-card"
			onClick={() => {
				navigator.push(`/services/${slug}`);
			}}
		>
			<img src={icon} alt={alt} className="service-icon" />
			<h5 className="semibold gray-800">{title}</h5>
			<p className="md-regular gray-500">{text}</p>
		</motion.div>
	);
};

const Services = React.forwardRef((props, ref) => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1, // Trigger when 10% of element is in view
	});

	return (
		<div
			id="services"
			className="services anchor-section"
			ref={ref}
			style={{
				overflow: "hidden",
			}}
		>
			<section className="services-content">
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
						light
						title="Unparalleled Services, Tailored for Startups"
					/>
				</motion.div>

				<div className="services-grid">
					<SerivceCard
						icon={AccountingIcon?.src}
						title="Accounting & Taxation"
						text="Precision-led record-keeping for financial clarity"
						alt="adlerone accounting & taxation"
						serviceClicked={props.serviceClicked}
						i={0}
						slug={"accounting"}
					/>
					<SerivceCard
						icon={SalesManagementIcon?.src}
						title="Sales Management"
						text="Driving revenue with strategic sales optimization"
						alt="adlerone sales management"
						serviceClicked={props.serviceClicked}
						i={1}
						slug={"sales-management"}
					/>
					<SerivceCard
						icon={MarketingIcon?.src}
						title="Marketing Management"
						text="Tailored campaigns to amplify reach and results"
						alt="alder one marketing management"
						serviceClicked={props.serviceClicked}
						i={2}
						slug={"marketing-management"}
					/>
					<SerivceCard
						icon={CustomerSupportIcon?.src}
						title="Customer Support"
						text="Boosting loyalty through responsive, personalized care"
						alt="alder one customer support"
						serviceClicked={props.serviceClicked}
						i={3}
						slug={"customer-support"}
					/>
					<SerivceCard
						icon={WebDesignIcon?.src}
						title="Development"
						text="Crafting user-centric platforms with precision and flair"
						alt="alder one development"
						serviceClicked={props.serviceClicked}
						i={4}
						slug={"development"}
					/>
				</div>
			</section>
		</div>
	);
});

export default Services;

export { SerivceCard };
