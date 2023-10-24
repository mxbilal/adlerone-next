import React from "react";

import "./Badge.css";

export default function Badge({ icon, text, alt }) {
	return (
		<div className="badge">
			{icon && <img src={icon} alt={alt} />}
			<p className="sm-regular badge-text">{text}</p>
		</div>
	);
}
