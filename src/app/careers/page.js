"use client"
import React, { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import "./Careers.css";
import SizedBox from "../../components/SizedBox/SizedBox";
import Point from "../../components/Point/Point";
import { motion } from "framer-motion";
import { PerkCard } from "../Sections/Perks";
import CenterHeading from "../../components/CenterHeading/CenterHeading";
import { useInView } from "react-intersection-observer";

import {
	CareerPerk1,
	CareerPerk2,
	CareerPerk3,
	CareerPerk4,
} from "../../assets/images";
import InputField from "../../components/InputField/InputField";
import Dropdown from "../../components/Dropdown/Dropdown";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import emailjs from "emailjs-com";
// import { storage } from "../../services/firebaseAuth";

import { CareersIcon } from "../../assets/icons";


export default function Careers() {
	return (
    <>
      <div className="career-page" style={{background:'white'}}>
        <PageHeader
          title={
            <>
              Crafting Futures, Together: Embark on{" "}
              <span className="primary"> Your Adler One Journey</span>
            </>
          }
          subtitle={
            "Embark on a career where your contributions drive innovative solutions and business growth"
          }
          badgeLabel={"Join Us Now"}
          badgeIcon={CareersIcon?.src}
        />
        <VisionNValues />
        <CareersPerks />
        <InterestForm />
      </div>
    </>
	);
}

const VisionNValues = () => {
	return (
		<section className="vision-n-values">
			<div className="left-col">
				<div
					className="card bg-primary"
					style={{
						height: "100%",
					}}
				>
					<h3 className="bold white">Our Vision</h3>
					<p className="lg-regular gray-100">
						At Adler One, our mission is to empower businesses
						through virtual excellence. We believe that every
						interaction is an opportunity to make a difference. Our
						commitment to delivering exceptional services and
						fostering growth is at the core of everything we do.
					</p>
					<SizedBox height={"100%"} />
				</div>

				<div className="card bg-gray-50">
					<h3 className="bold gray-800">Diversity and Inclusion</h3>
					<p className="lg-regular gray-500">
						At Adler One, we value diversity and inclusion. We
						believe that a diverse team leads to richer perspectives
						and more innovative solutions. We foster an environment
						where everyone's voice is heard and respected.
					</p>
				</div>
			</div>

			<div className="right-col">
				<div className="card bg-gray-50">
					<div className="card-header">
						<h3 className="bold gray-800">Our Values & Culture</h3>
						<SizedBox height={"1rem"} />
						<p className="lg-regular gray-500">
							Our culture is built on a strong foundation of core
							values that guide our actions and decisions
						</p>
					</div>
					<div className="card-points">
						<Point
							key={1}
							text={
								"We strive for excellence in everything we do, setting high standards for ourselves and our services. We believe in continuous improvement and pushing boundaries."
							}
							boldText={"Excellence: "}
							dark={false}
						/>
						<Point
							key={2}
							text={
								"We embrace innovation and encourage our team members to think creatively to find solutions that drive success. We're at the forefront of technological advancements."
							}
							boldText={"Innovation: "}
							dark={false}
						/>
						<Point
							key={3}
							text={
								"We believe in the power of teamwork. Collaboration and open communication are at the heart of our daily operations. We work together to achieve common goals and drive excellence."
							}
							boldText={"Collaboration: "}
							dark={false}
						/>
						<Point
							key={4}
							text={
								"Our clients are our top priority. We are committed to delivering the highest level of service and exceeding their expectations. We see our clients as partners in success."
							}
							boldText={"Client-Centric: "}
							dark={false}
						/>
					</div>
				</div>

				<div className="card bg-gray-50">
					<h3 className="bold gray-800">Community Engagement</h3>
					<p className="lg-regular gray-500">
						We believe in giving back to the community. Our team
						actively participates in volunteer and charity events to
						make a positive impact beyond the workplace. We're not
						just building a successful business; we're building a
						better world.
					</p>
				</div>
			</div>
		</section>
	);
};

const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

const CareersPerks = () => {
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
					title="Why Choose Adler One"
					subtitle="Our culture is built on a strong foundation of core values that guide our actions and decisions"
				/>
			</motion.div>
			<div className="perks-content">
				<PerkCard
					title="Opportunity for Growth"
					text="Embark on a journey where your professional advancements directly shape the trajectory of our collective success. Every contribution you make is a step forward for both you and our organization."
					icon={CareerPerk1?.src}
					alt="adler one proven success record"
					i={0}
				/>
				<PerkCard
					title="Innovation and Technology"
					text="Stay at the forefront of the industry by interacting with state-of-the-art tools and platforms. Your involvement propels us, ensuring we consistently pioneer in delivering exceptional services."
					icon={CareerPerk2?.src}
					alt="alder one professional team"
					i={1}
				/>
				<PerkCard
					title="Work-life Balance"
					text="Your well-being is paramount to us. Enjoy a harmonious blend of professional challenges and personal downtime, thanks to our emphasis on a balanced work environment."
					icon={CareerPerk3?.src}
					alt="adlerone tailored solutions"
					i={2}
				/>
				<PerkCard
					title="Collaborative Environment"
					text="Become an integral member of a dynamic team where collaboration is the heartbeat. Together, as a cohesive unit, we aim to achieve and exceed our shared goals."
					icon={CareerPerk4?.src}
					alt="adlerone maximized roi"
					i={3}
				/>
			</div>
		</section>
	);
};

const InterestForm = () => {
	const [selectedValues, setSelectedValues] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		linkedin: "",
		services: "",
		message: "",
		resume: "",
		coverLetter: "",
	});

	const options = [
		{ value: "accounting", label: "Accounting & Taxation" },
		{ value: "sales-management", label: "Sales Management" },
		{ value: "marketing-management", label: "Marketing Management" },
		{ value: "customer-support", label: "Customer Support" },
		{ value: "design-dev", label: "Design & Development" },
	];

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	useEffect(() => {
		const servicesString = selectedValues
			.map((item) => item.value)
			.join(", ");

		setFormData((prevData) => ({
			...prevData,
			services: servicesString,
		}));
	}, [selectedValues]);

	const [fileLink, setFileLink] = useState(null);

	const onFileChange = async (e) => {
		const file = e.target.files[0];
		const storageRef = storage().ref(`ApplicantsData/${file.name}`);
		const fileRef = storageRef.child(file.name);

		// Upload file
		await fileRef.put(file);

		// Get the URL of the uploaded file
		const fileURL = await fileRef.getDownloadURL();

		// Set the state
		setFileLink(fileURL);
	};

	const sendEmail = (message) => {
		emailjs
			.send(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				message,
				"YOUR_USER_ID"
			)
			.then(
				(response) => {
					console.log("Email sent:", response.status, response.text);
				},
				(error) => {
					console.log("Email error:", error);
				}
			);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const files = e.target.elements["resume"].files;
		const coverLetterFiles = e.target.elements["cover-letter"].files;

		let resumeLink = null;
		let coverLetterLink = null;

		if (files.length > 0) {
			const storageRef = storage().ref(`ApplicantsData/${files[0].name}`);
			await storageRef.put(files[0]);
			resumeLink = await storageRef.getDownloadURL();
		}

		if (coverLetterFiles.length > 0) {
			const storageRef = storage().ref(
				`ApplicantsData/${coverLetterFiles[0].name}`
			);
			await storageRef.put(coverLetterFiles[0]);
			coverLetterLink = await storageRef.getDownloadURL();
		}

		const message = {
			...formData,
			resume: resumeLink,
			coverLetter: coverLetterLink,
			to_email: "target@email.com", // Replace with the desired target email
		};

		sendEmail(message);
	};

	return (
		<section className="interest-form">
			<div className="interest-header">
				<h2 className="bold gray-900">Express Your Interest</h2>
				<p className="lg-regular gray-500">
					To express your interest in joining our team, please fill
					out the form below. We'll keep your information on file and
					reach out to you when a relevant job opportunity arises.
				</p>
			</div>
			<form className="join-us-form" onSubmit={handleFormSubmit}>
				<InputField
					label="Name"
					placeholder="Enter your name"
					type="text"
					value={formData.name}
					onChange={handleInputChange}
					isRequired={true}
					dark={true}
					name={"name"}
				/>
				<InputField
					label="Email"
					placeholder="Enter your email"
					type="email"
					value={formData.email}
					onChange={handleInputChange}
					isRequired={true}
					dark={true}
					name={"email"}
				/>
				<InputField
					label="Phone"
					placeholder="Enter your phone number"
					type="number"
					value={formData.phone}
					onChange={handleInputChange}
					isRequired={true}
					dark={true}
					name={"phone"}
				/>
				<InputField
					label="LinkedIn (optional)"
					placeholder="Enter your LinkedIn profile URL"
					type="urll"
					value={formData.linkedin}
					onChange={handleInputChange}
					isRequired={false}
					dark={true}
					name={"linkedin"}
				/>
				<InputField
					label="Resume (optional)"
					placeholder="Upload your resume"
					type="file"
					dark={true}
					onChange={onFileChange}
					name={"resume"}
				/>
				<InputField
					label="Cover Letter (optional)"
					placeholder="Upload your cover letter"
					type="file"
					dark={true}
					onChange={onFileChange}
					name={"coverLetter"}
				/>
				<Dropdown
					label="Areas of Interest/Expertise"
					options={options}
					value={selectedValues}
					onChange={setSelectedValues}
					required
					dark={true}
				/>
				<TextArea
					label="Briefly Tell Us About Yourself"
					placeholder="A short paragraph describing your background, skills, and why you'd like to join Adler One"
					value={formData.message}
					onChange={handleInputChange}
					dark={true}
				/>
				<Button
					label="Send Application"
					type="primary"
					btnType="submit"
					size="lg"
					className="fill black-btn"
					style={{
						marginTop: "1rem",
					}}
				/>
				<p className="xs-regular gray-500">
					By submitting your information, you agree to allow Adler One
					to store and use your data for potential job opportunities
					within our organization. We respect your privacy and will
					not share your information with third parties.
				</p>
			</form>
		</section>
	);
};
