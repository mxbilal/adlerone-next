"use client"
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Ribbon from "../../components/Ribbon/Ribbon";
import StarFeature from "../Sections/StarFeature";
import { FeatureBlock2 } from "../../components/CustomerSupport/CustomerSupport";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { PerkCard } from "../Sections/Perks";
import CenterHeading from "../../components/CenterHeading/CenterHeading";
import {
	WhyUsImg,
	WhyUsImg1,
	WhyUsImg2,
	WhyUsPerk1,
	WhyUsPerk2,
	WhyUsPerk3,
	WhyUsPerk4,
} from "../../assets/images";
import { Feature } from "../Sections/Features";
import Testimonials from "../Sections/Testimonials";
import Contact from "../Sections/Contact";
import BlogItems from "../../components/BlogItems/BlogItems";
import SizedBox from "../../components/SizedBox/SizedBox";
import Services from "../Sections/Services";

import { WhyUsIcon } from "../../assets/icons";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
export default function WhyUs() {
	return (
    <>
      <Header />
      <div className="service-page">
        <PageHeader
          title={
            <>
              Elevate Your Journey: Discover the{" "}
              <span className="primary">Adler One Advantage</span>{" "}
            </>
          }
          subtitle={
            "Experience innovative, client-centric solutions that elevate your business and champion your success"
          }
          badgeLabel={"Why Choose Us"}
          badgeIcon={WhyUsIcon?.src}
        />
        <Ribbon
          title={"Sculpting Your Success Path with Adler One"}
          text={
            "Seamlessly intertwining your ambitions with our expertise, we not only bring to life unparalleled business solutions but also forge a path where your aspirations and our capabilities align to create a symphony of sustainable growth and shared success."
          }
        />
        <SizedBox height={"4rem"} />
        <StarFeature
          title={"Dedication to Your Distinction"}
          text={"Where Your Triumph Becomes Our Obsession"}
          points={[
            {
              boldText: "Unyielding Commitment",
              text: "Relentlessly pursuing your vision to reality",
            },
            {
              boldText: "Open Channels",
              text: "Transparency at every stage, empowering informed decisions",
            },
            {
              boldText: "Quality Obsession",
              text: "Consistently exceeding standards for unparalleled value",
            },
          ]}
          image={WhyUsImg?.src}
        />
        <SizedBox height={"3rem"} />
        <FeatureBlock2
          title={"The Essence of Operational Excellence"}
          subtitle={"Crafting Perfection Through People & Process"}
          points={[
            {
              heading: "Talent Alchemy",
              text: "Beyond the mere process of hiring, we meticulously mold and nurture, crafting a dedicated team that's uniquely tailored to cater to your specific business needs. Our emphasis is on aligning skill sets and passions to deliver unparalleled results.",
            },
            {
              heading: "Effortless Integration",
              text: "We don't position ourselves as a detached external agency. Instead, we seamlessly embed our expertise into your operations, acting as an organic extension of your brand, ensuring that our partnership feels intrinsic and synergistic.",
            },
            {
              heading: "Proactive Innovation",
              text: "In a rapidly evolving marketplace, resting on laurels isn't an option. We're always a step ahead, proactively identifying potential challenges and turning them into opportunities. This forward-thinking approach allows us to craft innovative solutions that keep you on the front foot.",
            },
            {
              heading: "Transparent Engagement",
              text: "For us, trust is paramount. We maintain open channels of communication, providing clarity in all our operations. Regular updates, feedback loops, and open discussions ensure that you're always well-informed and actively involved in the decision-making processes.",
            },
          ]}
        />
        <WhyUsPerks />
        <Feature
          image={WhyUsImg1?.src}
          title={"Strategic Growth Catalyst"}
          points={[
            {
              boldText: "Data-Infused Strategy: ",
              text: "Dive deeper than metrics; harness insights that redefine growth.",
            },
            {
              boldText: "Strategic Resilience: ",
              text: "Future-ready solutions, preparing you for tomorrow’s challenges.",
            },
            {
              boldText: "Enduring Partnerships: ",
              text: "Building connections that last, fostering mutual growth.",
            },
          ]}
          left
        />
        <SizedBox height={"1rem"} />
        <Feature
          image={WhyUsImg2?.src}
          title={"Agile, Adaptable, Ahead"}
          points={[
            {
              boldText: "Scalability Par Excellence: ",
              text: "Solutions evolve as you do, ensuring sustained relevance.",
            },
            {
              boldText: "Strategic Vision: ",
              text: "Beyond the immediate; we envision long-term successes with you.",
            },
            {
              boldText: "Enduring Alliances: ",
              text: "Not just a vendor, but a committed, long-term ally on your journey.",
            },
          ]}
        />
        <SizedBox height={"5rem"} />
        <Services />
        <Testimonials />
        <Contact />

        <BlogItems category={"Why Us"} />
      </div>
      <Footer />
    </>
	);
}

const WhyUsPerks = () => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
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
				/* variants={fadeUp} */
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
					title="Comprehensive Service Harmony"
					subtitle="Streamlined Brilliance, Tailored For You"
				/>
			</motion.div>
			<div className="perks-content">
				<PerkCard
					title="Multi-Service Mastery"
					text={
						"Experience the ease and efficiency of centralized expertise. Instead of juggling multiple vendors, let Adler One become your single hub for a symphony of service solutions, seamlessly integrated and managed."
					}
					icon={WhyUsPerk1?.src}
					alt="adler one proven success record"
					i={0}
				/>
				<PerkCard
					title="Tailor-Made Excellence"
					text="Our approach is not about generic solutions. We dive deep into your business needs, strategizing and designing solutions that perfectly align with your brand's objectives, ensuring every aspect resonates with your vision."
					icon={WhyUsPerk2?.src}
					alt="alder one professional team"
					i={1}
				/>
				<PerkCard
					title="Unified Partnership"
					text="At Adler One, partnerships matter. We strive to create a collaborative ecosystem where our team synchronizes effortlessly with yours, fostering an environment that prioritizes mutual growth and success."
					icon={WhyUsPerk3?.src}
					alt="adlerone tailored solutions"
					i={2}
				/>
				<PerkCard
					title="Operational Continuity"
					text="The integration of our services into your daily operations is smooth and natural. With Adler One, you gain a seamless transition and operational consistency, ensuring business momentum is never disrupted, only enhanced."
					icon={WhyUsPerk4?.src}
					alt="adlerone maximized roi"
					i={3}
				/>
			</div>
		</section>
	);
};
