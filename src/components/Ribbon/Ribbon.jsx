import React from "react";

import "./Ribbon.css";

export default function Ribbon({ title, text }) {
	return (
		<div className="ribbon bg-primary">
			<section className="ribbon-content">
				<h3 className="bold white">{title}</h3>
				<p className="lg-regular gray-100">{text}</p>
			</section>
		</div>
	);
}
