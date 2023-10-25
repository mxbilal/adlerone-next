"use client"
import React, { useEffect, useState, useRef } from "react";

import { HeroImg2, Highlight2Img } from "../assets/images/index";

import Hero from "./Sections/Hero";
import Perks from "./Sections/Perks";
import Services from "./Sections/Services";
import StarFeature from "./Sections/StarFeature";
import Features from "./Sections/Features";
import Contact from "./Sections/Contact";
import Testimonials from "./Sections/Testimonials";
import "./Home.css";
import { useParams } from "react-router-dom";

export default function Home() {
	console.log("HeroImg2", HeroImg2)
	const [selectService, setSelectedService] = useState([]);

	const { section } = useParams();

	const heroRef = useRef(null);
	const serviceRef = useRef(null);
	const whyusRef = useRef(null);
	const contactRef = useRef(null);

	const refs = {
		hero: heroRef,
		services: serviceRef,
		whyus: whyusRef,
		contact: contactRef,
	};

	/* useEffect(() => {
		
		if (section && refs[section]?.current) {
			refs[section].current.scrollIntoView({ behavior: "smooth" });
		}
	}, [section]); */

	const currentRef = refs[section]?.current;

	useEffect(() => {
		if (section && currentRef) {
			currentRef.scrollIntoView({ behavior: "smooth" });
		}
	}, [section, currentRef]);

	return (
		<div>	
			<Hero ref={heroRef} />
			<StarFeature
				image={HeroImg2?.src}
				title="Setting the Gold Standard for Startup Support"
				points={[
					{
						text: "All-in-one services from book-keeping to SEO",
					},
					{
						text: "Powering successes with hands-on experience",
					},
					{
						text: "Streamlined support for startup growth",
					},
					{
						text: "Navigating challenges with expert insights",
					},
					{
						text: "Your partner in startup achievements",
					},
				]}
				alt="adlerone gold standard for startup support"
				topSpace={false}
			/>

			<Perks />
			<Services serviceClicked={setSelectedService} ref={serviceRef} />
			<Features ref={whyusRef} />

			<StarFeature
				image={Highlight2Img?.src}
				title="Schedule Your Strategy Session Today!"
				text="Ready to explore how Adler One can help your business thrive? Take the first step by scheduling a discovery call with our expert team. During this personalized session, we'll delve into your unique challenges, goals, and opportunities.
						<br/> <br/>Let's collaborate to uncover the tailored solutions that will drive your success. Your journey to achieving your business objectives begins with a simple click."
				buttonLabel="Schedule a Strategy Call"
				alt="adlerone schedule a strategy call"
				topSpace={false}
			/>

			<Testimonials />
			<Contact serviceSelected={selectService} ref={contactRef} />
		</div>
	);
}
