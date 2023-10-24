"use client"
import React from "react";
import Header from "@/layouts/Header/Header";
import "./Schedule.css";
import Footer from "@/layouts/Footer/Footer";
export default function Schedule() {
	return (
		<>
			<Header />
			<section className="schedule-meeting">
				<CalendlyEmbed />
			</section>
			<Footer />
		</>
	);
}

const CalendlyEmbed = () => {
	React.useEffect(() => {
		const head = document.querySelector("head");
		const script = document.createElement("script");
		script.setAttribute(
			"src",
			"https://assets.calendly.com/assets/external/widget.js"
		);
		head.appendChild(script);
	}, []);

	return (
		<div
			className="calendly-inline-widget"
			data-url="https://calendly.com/adlerone-sales-strategy-call/30mins?hide_gdpr_banner=1&primary_color=ad1a33"
			style={{ minWidth: "320px", maxWidth: "1000px", height: "700px" }}
		/>
	);
};

export { CalendlyEmbed };
