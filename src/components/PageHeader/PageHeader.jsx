import React from "react";

import "./PageHeader.css";
import Badge from "../Badge/Badge";

export default function PageHeader({
	title,
	subtitle,
	img,
	alt,
	badgeLabel,
	badgeIcon,
	height,
}) {
	return (
		<section
			className="page-header"
			style={{
				height: height ? "fit-content" : "75vh",
			}}
		>
			<div className="page-header-content">
				{badgeLabel && <Badge text={badgeLabel} icon={badgeIcon} />}
				<h1 className="bold gray-900">{title}</h1>
				<p className="lg-regular gray-500">{subtitle}</p>
			</div>

			{img && (
				<div className="page-header-img">
					<img src={img} alt="" />
				</div>
			)}
		</section>
	);
}
