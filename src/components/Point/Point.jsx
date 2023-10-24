import React from "react";
import CheckIcon from "../../assets/icons/check-icon.svg";
import CheckIconRed from "../../assets/icons/check-icon-red.svg";
import "./Point.css";

export default function Point({ text, dark, boldText }) {
	return (
		<div className="point">
			<img
				src={dark ? CheckIcon : CheckIconRed}
				alt=""
				style={{
					marginTop: "0.1rem",
				}}
			/>
			<p className={`lg-regular ${dark ? "white" : "gray-500"}`}>
				<span
					style={{
						fontWeight: "600",
					}}
					className={`${dark ? "white" : "gray-800"}`}
				>
					{boldText}
				</span>
				{text}
			</p>
		</div>
	);
}
