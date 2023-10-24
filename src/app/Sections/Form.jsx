// YourFormComponent.js
import React, { useEffect, useState } from "react";
import submitToHubSpot from "../../services/hubSpotService";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'

const HubSpotForm = ({ selectedService }) => {
	const navigator = useRouter();

	const [formData, setFormData] = useState({
		firstname: "",
		email: "",
		company: "",
		website: "",
		services: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [selectedValues, setSelectedValues] = useState([]);

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
	// eslint-disable-next-line react-hooks/exhaustive-deps

	const handleFormSubmit = async (event) => {
		//console.log("Form data:", formData);
		//console.log("Selected values:", selectedValues);

		event.preventDefault();

		setFormSubmitted(true);

		//console.log("Form submitted successfully");

		try {
			const response = await submitToHubSpot(formData);
			console.log("Form submitted successfully:", response);

			setErrorMessage("");
			navigator.push("/thank-you-for-submitting");
		} catch (error) {
			console.error("Error submitting form:", error);
			setErrorMessage("Failed to submit the form. Please try again.");
		}
	};

	const options = [
		{ value: "accounting", label: "Accounting & Taxation" },
		{ value: "sales-management", label: "Sales Management" },
		/* 		{ value: "insurance-management", label: "Insurance Management" },
		 */ { value: "marketing-management", label: "Marketing Management" },
		{ value: "customer-support", label: "Customer Support" },
		{ value: "design-dev", label: "Design & Development" },
	];

	useEffect(() => {
		// find the value of the label inside selectedService and add it to selectedValues
		const selectedServiceValue = options.find(
			(item) => item.label === selectedService
		);

		if (selectedServiceValue) {
			setSelectedValues([selectedServiceValue]);
		}

		//console.log(selectedValues);
	}, [selectedService]);

	return (
		<form onSubmit={handleFormSubmit} className="contact-form">
			<InputField
				type="text"
				label="Name"
				name="firstname"
				isRequired={true}
				forceErrorDisplay={formSubmitted}
				placeholder="Enter your name"
				value={formData.firstname}
				onChange={handleInputChange}
			/>
			<InputField
				type="email"
				label="Email"
				name="email"
				isRequired={true}
				forceErrorDisplay={formSubmitted}
				placeholder="Enter your email"
				value={formData.email}
				onChange={handleInputChange}
			/>
			<InputField
				type="text"
				label="Company"
				name="company"
				isRequired={true}
				forceErrorDisplay={formSubmitted}
				placeholder="Enter your company name"
				value={formData.company}
				onChange={handleInputChange}
			/>
			<InputField
				type="urll"
				label="Website"
				name="website"
				isRequired={true}
				forceErrorDisplay={formSubmitted}
				placeholder=""
				value={formData.website}
				onChange={handleInputChange}
			/>
			<Dropdown
				label={"Services Needed"}
				name={"services"}
				placeholder={"Select all that apply"}
				options={options}
				value={selectedValues}
				onChange={setSelectedValues}
			/>
			<Button
				label="Send Request"
				type="primary"
				btnType="submit"
				size="lg"
				className="fill black-btn"
				style={{
					marginTop: "1rem",
				}}
			/>
			{errorMessage && (
				<p className="xs-regular gray-600">{errorMessage}</p>
			)}
		</form>
	);
};

export default HubSpotForm;
