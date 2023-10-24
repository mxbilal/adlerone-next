import React from "react";

import "./CenterHeading.css";

export default function CenterHeading({ title, subtitle, light }) {
	return (
		<div className="center-heading">
			<h2 className={`bold ${light ? "white" : "gray-800"}`}>{title}</h2>
			{subtitle && (
				<p className={`lg-regular ${light ? "gray-50" : "gray-500"}`}>
					{subtitle}
				</p>
			)}
		</div>
	);
}
