import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TestimonialSlider from "../../components/Testimonials/TestimonialSlider";
import CenterHeading from "../../components/CenterHeading/CenterHeading";

import {
	Ava,
	Chloe,
	Emma,
	Ethan,
	Harper,
	Henry,
	Jackson,
	Leo,
	Lily,
	Mason,
	Melissa,
	Mia,
	Noah,
	Olivia,
	Stella,
	Zoe,
} from "../../assets/images/avatars/index";
import { TestimonialImg } from "../../assets/images";
import applyOrder from "../../services/applyOrder";

const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
	const [inViewRef, inView] = useInView({
		triggerOnce: true, // Only trigger once
		threshold: 0.1, // Trigger when 10% of element is in view
	});

	const testimonials = [
		{
			heading: "Partners of Business Navigation",
			text: "AdlerOne, thank you for guiding us through start-up financial complexities. Your accounting services established a robust business base. We deeply appreciate your expertise!",
			name: "Emma Bennett",
			title: "Chief Financial Officer",
			avatar: Emma,
		},
		{
			heading: "Supportive Business Pillar",
			text: "Grateful for AdlerOne's responsive customer support. Their dedication helped us overcome early challenges, invaluable for our fledgling business!",
			name: "Jackson Reynolds",
			title: "Vice President of Operations",
			avatar: Jackson,
		},
		{
			heading: "Catalyzing Growth with Precision",
			text: "AdlerOne, your sales management strategies were pivotal during our growth. Thankful for increased revenue and market presence. Your impact is immeasurable!",
			name: "Olivia Turner",
			title: "Director of Sales and Marketing",
			avatar: Olivia,
		},
		{
			heading: "Transformational Brand Strategies",
			text: "AdlerOne's marketing guidance drove significant growth. Innovative campaigns and insights reshaped our brand. Deep appreciation for your transformative impact!",
			name: "Ethan Parker",
			title: "Chief Marketing Officer",
			avatar: Ethan,
		},
		{
			heading: "Financial Stabilization Experts",
			text: "AdlerOne, your financial expertise stabilized our growing business, enabling focused expansion. You are the backbone of our success!",
			name: "Lily Patterson",
			title: "Senior Finance Manager",
			avatar: Lily,
		},
		{
			heading: "Revenue Maximization Specialists",
			text: "Heartfelt thanks to AdlerOne's sales team. Your strategies opened new revenue avenues, deeply appreciated dedication to our success!",
			name: "Melissa Hayes",
			title: "Sales and Business Development Director",
			avatar: Melissa,
		},
		{
			heading: "Expert Market Positioning",
			text: "AdlerOne, your marketing brilliance elevated our brand. Increased sales and market reputation, profoundly thankful for your exceptional services!",
			name: "Chloe Mitchell",
			title: "Marketing Manager",
			avatar: Chloe,
		},
		{
			heading: "Client Satisfaction Leaders",
			text: "Profound thanks to AdlerOne for transforming our customer support. Your dedication ensured client satisfaction, invaluable for our growing business!",
			name: "Mason Cole",
			title: "Customer Experience Director",
			avatar: Mason,
		},
		{
			heading: "Strategic Financial Advisors",
			text: "AdlerOne, your financial insights were indispensable during our expansion. Profoundly grateful for your vital role in our journey!",
			name: "Ava Reynolds",
			title: "Chief Financial Strategist",
			avatar: Ava,
		},
		{
			heading: "Visionary Sales Experts",
			text: "Deepest gratitude to AdlerOne's sales management team. Your innovative approaches propelled us into new territories. Impact is immeasurable!",
			name: "Leo Hughes",
			title: "Sales Operations Director",
			avatar: Leo,
		},
		{
			heading: "Brand Enhancement Specialists",
			text: "AdlerOne, your marketing brilliance drove unprecedented growth. Thankful for your outstanding strategies and impact on our expansion!",
			name: "Mia Peterson",
			title: "Marketing Director",
			avatar: Mia,
		},
		{
			heading: "Client Success Leaders",
			text: "Profound thanks to AdlerOne's customer success team. Your dedication ensured positive reviews and loyalty. Your commitment is truly appreciated!",
			name: "Noah Walker",
			title: "Customer Success Manager",
			avatar: Noah,
		},
		{
			heading: "Cost Efficiency Masters",
			text: "AdlerOne, your cost-effective accounting solutions were a lifeline. Your wisdom saved substantial funds. Thank you for your support!",
			name: "Harper Thompson",
			title: "Financial Controller",
			avatar: Harper,
		},
		{
			heading: "Quality Efficiency Experts",
			text: "Grateful for AdlerOne's sales operations team. Your efficiency allowed cost-cutting while maintaining quality. Invaluable contributions, thank you!",
			name: "Zoe Collins",
			title: "Operations Manager",
			avatar: Zoe,
		},
		{
			heading: "Budget Management Innovators",
			text: "AdlerOne, your marketing strategies were effective within our budget. Your creativity is commendable. Immensely thankful for your solutions!",
			name: "Henry Brooks",
			title: "Marketing Coordinator",
			avatar: Henry,
		},
		{
			heading: "Efficiency Champions",
			text: "Sincerest thanks to AdlerOne's customer support team. Your efficiency allowed cost-cutting without compromising satisfaction. Truly appreciated dedication!",
			name: "Stella Evans",
			title: "Senior Customer Support Specialist",
			avatar: Stella,
		},
	];

	return (
		<section className="testimonials">
			<motion.div
				ref={inViewRef}
				className="testimonials-heading"
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				variants={fadeUp}
				transition={{
					duration: 0.4,
				}}
			>
				<CenterHeading
					title="Our Clients are Speaking Up"
					subtitle="Stories from our clients, who made it through and beyond"
				/>
			</motion.div>

			<motion.div
				ref={inViewRef}
				className="testimonials-heading"
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				variants={fadeUp}
				transition={{
					duration: 0.4,
					delay: 0.2,
				}}
			>
				<div className="testimonials-content">
					<img
						src={TestimonialImg}
						alt=""
						className="testimonial-img"
					/>
					<div
						style={{
							width: applyOrder ? "50%" : "100%",
							height: "100%",
						}}
					>
						<TestimonialSlider testimonials={testimonials} />
					</div>
				</div>
			</motion.div>
		</section>
	);
}
