import React from "react";
import "./Button.css";

export default function Button(props) {
	return (
		<button
			onClick={props.onClick ? props.onClick : () => {}}
			className={`btn ${props.type ? props.type : "primary"} ${
				props.className ? props.className : ""
			} ${props.size === "lg" ? "lg lg-medium" : "sm md-medium"}`}
			style={props.style ? props.style : {}}
			type={props.btnType ? props.btnType : "button"}
		>
			{props.label}
		</button>
	);
}
