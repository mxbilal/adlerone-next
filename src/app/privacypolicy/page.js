"use client"
import React from "react";
import "./PrivacyPolicy.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
export default function PrivacyPolicy() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	function BoldPoint({ bold, text }) {
		return (
			<p className="lg-regular gray-500">
				<span className="lg-bold gray-700">{bold}</span> {text}
			</p>
		);
	}

	function Pargraph({ text }) {
		return <p className="lg-regular gray-500">{text}</p>;
	}

	function H5({ text }) {
		return <h5 className="bold gray-800">{text}</h5>;
	}

	return (
		<>
			<Header />
			<section className="privacy-policy">
				<h1 className="bold gray-900">Privacy Policy</h1>
				<p className="md-medium gray-900">
					Last Updated: 26 September, 2023
				</p>
				<br />
				<Pargraph
					text="
					Welcome to Adler One. Your privacy is important to us. This
					Privacy Policy explains how we collect, use, disclose, and
					protect your personal information when you use our website,
					products, or services. By using Adler One's website or services,
					you consent to the practices described in this Privacy Policy."
				/>
				<br />
				<H5 text="1. Information We Collect" />
				<BoldPoint
					bold="1.1. Personal Information:"
					text="We may collect personal information that you provide to us directly, such as your name, email address, postal address, phone number, and other contact details when you fill out forms on our website, subscribe to our newsletter, request information, or communicate with us."
				/>
				<BoldPoint
					bold="1.2. Usage Data:"
					text="We automatically collect information about your interactions with our website, including your IP address, browser type, device information, pages visited, time spent on pages, and other usage data. This information helps us analyze website performance, improve content, and customize your online experience."
				/>
				<BoldPoint
					bold="1.3. Cookies and Tracking Technologies:"
					text="We use cookies and similar tracking technologies to gather data about your browsing behavior. Cookies are small text files stored on your device that help us analyze how you use our website. You can manage your cookie preferences through your browser settings."
				/>
				<br />

				<H5 text="2. How We Use Your Information" />
				<BoldPoint
					bold="2.1. Providing Services:"
					text="We use your personal information to provide you with the services you request, respond to your inquiries, process transactions, and deliver relevant content, updates, and information."
				/>
				<BoldPoint
					bold="2.2. Analytics:"
					text="We analyze usage data to monitor website performance, understand user preferences, and improve our content and services."
				/>
				<BoldPoint
					bold="2.3. Marketing:"
					text=" With your consent, we may use your personal information to send you promotional emails about our products, services, events, and news. You can opt out of these communications at any time by following the unsubscribe instructions provided in the email."
				/>
				<br />
				<H5 text="3. Disclosure of Your Information" />
				<Pargraph text="We do not sell or rent your personal information to third parties. However, we may share your data with trusted service providers, business partners, or affiliates who assist us in website operations, analytics, marketing, or other business-related activities. These third parties are contractually obligated to protect your information and use it solely for the purposes specified." />
				<br />

				<H5 text="4. Data Security" />
				<Pargraph text="We take reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, please be aware that no online transmission or storage method is entirely secure, and we cannot guarantee absolute data security." />
				<br />

				<H5 text="5.  Links to Other Websites" />
				<Pargraph text="Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We recommend reviewing their privacy policies before sharing personal information with them." />
				<br />

				<H5 text="6. Children's Privacy" />
				<Pargraph text="Our services are not directed at individuals under the age of 18. We do not knowingly collect or maintain personal information from children. If we learn that we have inadvertently collected data from a child, we will take appropriate steps to delete it." />
				<br />

				<H5 text="7. Your Rights and Choices" />
				<Pargraph text="You have the right to access, correct, or delete your personal information held by us. You may also have the right to object to or restrict certain data processing activities. To exercise these rights or opt out of marketing communications, please contact us using the information provided in Section 10." />
				<br />

				<H5 text="8. Changes to This Privacy Policy" />
				<Pargraph text="We may update this Privacy Policy to reflect changes in our data practices or legal requirements. Any updates will be posted on this page with the revised date. We encourage you to review this Privacy Policy periodically for any changes." />
				<br />

				<H5 text="9. Contact Us" />
				<p className="lg-regular gray-500">
					If you have questions or concerns about this Privacy Policy or
					our data practices, please contact us at:{" "}
					<span>
						{" "}
						<a href="mailto:info@adlerone.de" className="primary">
							info@adlerone.de
						</a>
					</span>
				</p>
			</section>
			<Footer />
		</>
	);
}
