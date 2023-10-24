import React from "react";
import applyOrder from "../../services/applyOrder";

export default function SizedBox({ height, width, children }) {
	if (applyOrder)
		return (
			<div style={{ height: `${height}`, width: `${width}` }}>
				{children}
			</div>
		);
}
