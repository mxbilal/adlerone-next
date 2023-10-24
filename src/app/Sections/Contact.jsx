import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HubSpotForm from "./Form";
import Metric from "../../components/Metric/Metric";

import "./sections.css";

const Contact = React.forwardRef((props, ref) => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.4, // Trigger when 10% of element is in view
	});

	return (
		<div className="contact-bg anchor-section" id="contact" ref={ref}>
			<motion.section
				className="contact-content"
				ref={inViewRef}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				variants={{
					hidden: { opacity: 0, y: 150 },
					visible: { opacity: 1, y: 0 },
				}}
				transition={{
					duration: 0.4,
				}}
			>
				<div className="contact-inner-content">
					<div className="contact-text-content">
						<h1 className="bold white">
							Let's Talk About Your Startup's Potential
						</h1>
						<p className="lg-regular white">
							Share your details, and we'll reach out for a
							personalized consultation. Unlock the strategies and
							solutions to propel your startup forward.
						</p>
					</div>
					<div className="contact-metrics">
						<Metric
							digit={53}
							post="+"
							label="Businesses Consulted"
						/>
						<Metric
							digit={98}
							post="%"
							label="Client Satisfaction"
						/>
						<Metric digit={220} post="%" label="Average ROI" />
					</div>
				</div>

				<HubSpotForm selectedService={props.serviceSelected} />
			</motion.section>
		</div>
	);
});

export default Contact;
