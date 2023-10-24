import React from "react";
import Select from "react-select";

import "../InputField/InputField.css";

export default function Dropdown({
	label,
	id,
	placeholder,
	options,
	name,
	value,
	onChange,
	required,
	dark = false,
	multi = true,
	size,
}) {
	return (
		<div
			className={`input-field ${dark ? "dark" : ""} ${
				size === "sm" ? "sm" : ""
			}`}
		>
			{label && (
				<label
					className={`sm-regular ${dark ? "gray-700" : "white"}`}
					htmlFor={id || name}
				>
					{label}
				</label>
			)}

			<Select
				iMulti={multi ? true : false}
				name={name}
				options={options}
				className="basic-multi-select"
				classNamePrefix="select"
				value={value}
				onChange={onChange}
				isClearable={false}
				maxMenuHeight={280}
				required={required}
				placeholder={placeholder}
			/>
		</div>
	);
}
