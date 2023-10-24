import React, { useState, useEffect } from "react";
import "../InputField/InputField.css";

export default function TextArea({
	type = "text",
	label,
	placeholder,
	id,
	name,
	isRequired = false,
	forceErrorDisplay = false,
	value,
	onChange,
	dark = false,
}) {
	const [error, setError] = useState("");
	const [touched, setTouched] = useState(false);

	useEffect(() => {
		if (
			(touched || forceErrorDisplay) &&
			isRequired &&
			value.trim() === ""
		) {
			setError(`${label} is required.`);
		} else {
			setError("");
		}
	}, [value, label, isRequired, touched, forceErrorDisplay]);

	const handleChange = (e) => {
		let inputValue = e.target.value;

		// If the input value starts with https://, remove it
		if (type === "urll" && inputValue.startsWith("https://")) {
			inputValue = inputValue.substring(8); // Remove the first 8 characters (https://)
			//inputValue = "https://" + inputValue; // Add https:// to the beginning of the string
		}

		// Call the parent's onChange handler
		if (onChange) {
			e.target.value = inputValue;
			onChange(e);
		}
	};

	const handleBlur = () => {
		setTouched(true);
	};

	return (
		<div className="input-field">
			{label && (
				<label
					className={`sm-regular ${dark ? "gray-700" : "white"}`}
					htmlFor={id || name}
				>
					{label}
				</label>
			)}
			<div className={`input-wrapper ${dark ? "dark" : ""}`}>
				{type === "urll" && (
					<span
						className={`protocol-prefix ${dark ? "gray-900" : ""}`}
					>
						https://
					</span>
				)}
				<textarea
					type={type}
					id={id || name}
					name={name}
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					placeholder={placeholder}
				/>
			</div>

			{(touched || forceErrorDisplay) && error && (
				<p
					className={`xs-regular error-text ${
						dark ? "error-600" : "error-200"
					}`}
				>
					{error}
				</p>
			)}
		</div>
	);
}
