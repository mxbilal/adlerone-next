import React from "react";

export default function Divider({ color }) {
	const style = {
		height: "1px",
		width: "100%",
		margin: "0",
	};

	return (
		<div className={`${color ? color : "bg-gray-200"}`} style={style}></div>
	);
}
