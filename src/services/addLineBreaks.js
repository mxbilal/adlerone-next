import React from "react";

function renderTextWithBreaks(text) {
	const splitText = text.split("<br/>");

	return splitText.map((line, index) => (
		<React.Fragment key={index}>
			{line}
			{index !== splitText.length - 1 && <br />}
		</React.Fragment>
	));
}

export default renderTextWithBreaks;
