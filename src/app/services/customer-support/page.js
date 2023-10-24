"use client"
import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Ribbon from "../../../components/Ribbon/Ribbon";
import CenterHeading from "../../../components/CenterHeading/CenterHeading";

import "../Services.css";
import { Feature } from "../../Sections/Features";

import {
	CustomerSupportImg,
	CustomerSupportImg2,
	CustomerSupportImg3,
} from "../../../assets/images";
import StarFeature from "../../Sections/StarFeature";
import Testimonials from "../../Sections/Testimonials";
import Contact from "../../Sections/Contact";
import FAQs from "../../../components/FAQs/FAQs";
import OtherServices from "../../../components/OtherServices/OtherServices";
import BlogItems from "../../../components/BlogItems/BlogItems";
import SizedBox from "../../../components/SizedBox/SizedBox";

import { CustomerSupportIcon } from "../../../assets/icons";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
export default function CustomerSupport() {
	return (
    <>
      <Header />
      <div className="service-page">
        <PageHeader
          title={
            <>
              Transforming{" "}
              <span className="primary">Customer Interactions</span>{" "}
              into Long-lasting Relationships
            </>
          }
          subtitle={
            "Tailored Support Solutions, Exclusively for Your Business"
          }
          badgeLabel={"Customer Support Experts"}
          badgeIcon={CustomerSupportIcon?.src}
        />
        <Ribbon
          title="The Cornerstone of Exceptional Customer Experiences"
          text="Uniting technology and empathy, Adler One transcends traditional customer support, fostering brand loyalty and turning every customer interaction into an opportunity to amplify your brand's value."
        />
        <SizedBox height={"3rem"} />
        <FeatureBlock2
          title={"Why Opt for Adler One’s Customer Support"}
          subtitle={
            "Pioneering a client-first approach, Adler One delivers not just a helpline but an embodiment of your brand's values, ensuring every customer touchpoint is genuine and impactful."
          }
          points={[
            {
              heading: "Client-Aligned Training",
              text: "Exceptional customer support starts with a deep understanding of your brand. Our agents go through rigorous, client-specific training programs that cover everything from your products and services to your corporate ethos, ensuring they can represent your brand with the same passion and precision as you would.",
            },
            {
              heading: "Exclusive Team Assignment",
              text: "Your business is unique, and so are your support needs. Unlike other service providers, the team we assign to you is exclusively yours, providing undivided attention to your customers and ensuring continuity and a deeper understanding of your business.",
            },
            {
              heading: "Data-Driven Insights",
              text: "Beyond addressing immediate concerns, we harness the power of analytics to continuously enhance the support experience. By studying interaction patterns and feedback, we tailor our strategies to ensure future interactions are even more effective and aligned with customer expectations.",
            },
            {
              heading: "Proactive Problem Resolution",
              text: "Anticipation is key to stellar customer service. Our team doesn’t just react to issues; we proactively identify potential challenges and craft solutions. This forward-thinking approach minimizes repeat issues and fosters a smoother, more efficient support journey for your clients.",
            },
          ]}
        />
        <SizedBox height={"4rem"} />
        <Feature
          title={"Key Features that Set Us Apart"}
          text={
            "Elevating your brand with technological acumen, strategic problem-solving, and in-depth customer understanding."
          }
          points={[
            {
              boldText: "Multi-Channel Support: ",
              text: "Ensuring accessibility via email, phone, and live chat across all key platforms.",
            },
            {
              boldText: "Issue Tracking: ",
              text: "Beyond solutions, we analyze every query for ongoing service enhancement.",
            },
            {
              boldText: "Business Hours Availability: ",
              text: "Guaranteeing steadfast, high-quality support during your operating hours.",
            },
          ]}
          image={CustomerSupportImg?.src}
          left
        />
        <SizedBox height={"3rem"} />
        <Feature
          title={
            "Advantages of Outsourcing Customer Support to Adler One"
          }
          text={
            "Elevate your customer service with Adler One's affordable, expert, and flexible support solutions, tailored to your business needs."
          }
          points={[
            {
              boldText: "Cost-Effective Solutions: ",
              text: "Attain quality support without the financial strain, enhancing your ROI.",
            },
            {
              boldText: "Expertise & Experience: ",
              text: "Utilize our deep industry knowledge and skilled teams to assure your clients are in competent hands.",
            },
            {
              boldText: "Flexibility & Scalability: ",
              text: "Adapt with us during your peaks and troughs, ensuring services meet your real-time needs.",
            },
          ]}
          /* image={
            "https://images.pexels.com/photos/8867271/pexels-photo-8867271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          } */
          image={CustomerSupportImg3?.src}
        />
        <SizedBox height={"3rem"} />
        <StarFeature
          title={"Navigate Your Outsourcing Journey with Confidence"}
          text={
            "Your path to transparent, adaptable, and quality-driven outsourcing solutions with Adler One."
          }
          points={[
            {
              boldText: "Cost-Effective Solutions: ",
              text: "Seamlessly integrate our services with zero disruptions",
            },
            {
              boldText: "Custom-Tailored Support: ",
              text: "Available when you need us, including weekends and holidays",
            },
            {
              boldText: "Quality-Centric Approach: ",
              text: "Consistently delivering premium, scalable solutions",
            },
          ]}
          image={CustomerSupportImg2?.src}
        />
        <SizedBox height={"1rem"} />
        <Testimonials />
        <SizedBox height={"1rem"} />
        <Contact />
        <SizedBox height={"3rem"} />
        <FAQs
          title={"Your Questions, Expertly Answered"}
          subheading={
            "Navigating through outsourcing curiosities? Here’s a snapshot of what makes Adler One a standout choice"
          }
          questions={[
            {
              question:
                "What Makes Adler One Different from Other Customer Support Providers?",
              answer: "At Adler One, we offer exclusive team assignments, which means the team working for you won't be juggling multiple clients. This ensures undivided attention and a tailored approach that aligns closely with your brand’s values and objectives.",
            },
            {
              question:
                "Is it Easy to Switch to Adler One if I'm Already Using Another Provider?",
              answer: "Absolutely, Our onboarding process is streamlined to minimize any disruptions to your ongoing business activities. We conduct an in-depth analysis of your needs and tailor our services to offer a seamless transition.",
            },
            {
              question:
                "Do you Offer Support on Weekends and Holidays?",
              answer: "We offer flexible support solutions to meet your specific requirements. While we may not provide 24/7 support, our services can be customized to cover weekends and holidays based on your business needs.",
            },
            {
              question:
                "How do you Maintain Quality Assurance in Customer Interactions?",
              answer: "Quality is paramount in everything we do. We engage in regular performance audits, meticulously track each customer query, and solicit client feedback to continuously refine our service delivery.",
            },
            {
              question:
                "Can I Scale Services Based on my Business Needs?",
              answer: "Absolutely, We pride ourselves on our ability to adapt to your needs. Whether it’s scaling up during high-traffic seasons or scaling down, our services are designed to be as flexible as your business requires.",
            },
          ]}
        />
        <SizedBox height={"3rem"} />
        <OtherServices currentServiceTitle={"Customer Support"} />
        <BlogItems category={"Customer Support"} />
      </div>
      <Footer />
    </>
	);
}

const FeatureBlock2 = ({ title, subtitle, points }) => {
	const renderPoints = () => {
		return points.map((point, i) => {
			return (
				<div className="renderPoint bg-gray-50" key={i}>
					<h5 className="semibold gray-700">{point.heading}</h5>
					<p className="md-regular gray-500">{point.text}</p>
				</div>
			);
		});
	};

	return (
		<section className="feature-block-2">
			<CenterHeading title={title} subtitle={subtitle} />
			<div className="feature-block-2-points">{renderPoints()}</div>
		</section>
	);
};

export { FeatureBlock2 };
